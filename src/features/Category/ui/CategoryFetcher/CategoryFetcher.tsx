import { useState, useEffect, useCallback, useRef, Ref } from "react";
import axios from 'axios'

import { CategoryDto } from '@features/Category/api/categoryDto'
import { loadJSON } from '@jsonUtilities'

import styles from './CategoryFetcher.module.css'


/**
 * Возвращает заданный ref для последнего эл-та массива, для ост. - undefined
 * @param count - кол-во эл-ов в массиве
 * @param index - индекс проверяемого эл-та в массиве (индексация с 0)
 * @param ref - ref, к-ый нужно вернуть, если проверяемый эл-т - последний
 * @param overscan - упреждающая поправка для опред-я последнего эл-та по индексу
 *    1 - последний эл-т таковым и считается (штатное поведение), 
 *    n - n-ый с конца эл-т массива будет считаться последним 
 *    n > 1 - позволяет вып-ть нужную логику немного раньше (например, в случае Infinite Scroll подгрузить новые данные раньше, чем станет виден последний эл-т списка)
 */
export const getLastRef = (count: number, index: number, ref: Ref<any> | undefined, overscan: number = 5) => {
  if (count === index + overscan)
    return ref
  else
    return;
}


export interface CategoryFetcherProps<T> {
  fetchPath: string;
  renderData: (data: T | null, lastNodeRef: Ref<any>) => React.ReactNode;
  isMockData?: boolean;
}

export default function CategoryFetcher<T>({ fetchPath, renderData, isMockData = false }: CategoryFetcherProps<T>) {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [summaryData, setSummaryData] = useState<CategoryDto<T> | null>(null);


  // Наблюдатель за появлением последнего эл-та в списке во viewport (когда он становится виден на странице)
  // Исп-ем useRef, чтобы сохранять сост-е при перерисовках
  const observer = useRef<IntersectionObserver>(null);

  /* ref на последний отрисованный эл-т в списке
  Исп-ем НЕ useRef, а ф-ю, к-ая будет вызвана сразу после монтирования эл-та node >> можем вып-ть нужную логику
  */
  const lastNodeRef = useCallback((node: HTMLElement) => {

    // console.log('lastNode: ', node);

    if (isLoading)
      return;

    if (isMockData)
      return;
    
    // Отписываемся от наблюдения за предыдущим "последним" эл-том списка
    if (!!observer.current) {
      observer.current.disconnect();
    }

    // Создаем IntersectionObserver за появлением нек-го DOM-эл-та во viewport + обработчик этого события
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        // console.log('Intersecting');
        setPage(prevPage => prevPage + 1);
      }
    });

    // Назначаем наблюдателя за появлением последнего эл-та в списке во viewport
    if (!!node)
      observer.current.observe(node);

  }, [data]);
 

  const fetchData = async (abortController: AbortController) => {
    setIsLoading(true);
    try {
      let newData;
      if (isMockData) {
        newData = await loadJSON(fetchPath);
        setData(newData as unknown as T);
      }
      else {
        const response = await axios.get(fetchPath, 
          {
            params: {page: page},
            signal: abortController.signal,
          }
        );
        // console.log('response.data: ', response.data);
        const responseData = response.data as CategoryDto<T>;
        newData = responseData.results as unknown as T;
        let complexData;
        if (Array.isArray(data) && Array.isArray(newData))
          complexData = [...data, ...newData] as T;
        else
          complexData = newData;
        
        setData(complexData);
        setHasMore(!!responseData.info.next);  // флаг наличия след. страниц с данными
        setSummaryData(responseData);
      }
    } catch(err) {
      setData(null);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const abortController = new AbortController();
    fetchData(abortController);

    // Прерываем вып-е запроса при изм-ии зависимостей, если запрос еще не выполнен
    return () => isLoading ? abortController.abort() : undefined;
  }, [page]);
  

  return  (
    <>
      {/* Отрисовка данных. Отрисовщик должен назначить lastNodeRef в кач-ве ref'а на последний отрисованный эл-т */}
      {renderData(data, lastNodeRef)}
      {isLoading && <>Загрузка...</>}
      {!!error && <div className={styles.error}>Ошибка загрузки данных: {error}</div>}
      {!isMockData && <CategorySummary<T> summaryData = {summaryData} page = {page}/>}
    </>
  )
}


interface CategorySummaryProps<T> {
  summaryData: CategoryDto<T> | null;
  page: number;
}

// Сводка по данным категории
function CategorySummary<T>({ summaryData, page }: CategorySummaryProps<T>) {
  return (
    <div className={styles.summaryContainer}>
      <span>{`Всего элементов: ${summaryData?.info.count ?? ''}`}</span>
      <span>{`Всего страниц: ${summaryData?.info.pages ?? ''}`}</span>
      <span>{`Загружено страниц: ${page ?? ''}`}</span>
    </div>
  )
}