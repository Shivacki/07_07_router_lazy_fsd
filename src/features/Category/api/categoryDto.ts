// Описатель общего ответа на запрос категории T, см. https://rickandmortyapi.com/api/xxx
export interface CategoryDto<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;  // next page url
    prev: string | null;  // prev page url
  };
  results: T;  // данные по категории
}
