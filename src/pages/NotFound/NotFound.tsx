import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { ROUTER_PATHS } from '@routerPaths'


// Неизвестная страница приложения
const NotFound = () => {

  const navigate = useNavigate();

  useEffect(() => {
    // Перенаправляем на гл. страницу приложения с задержкой, чтобы юзер успел прочитать сообщение
    const timeout = setTimeout(() => navigate(ROUTER_PATHS.home), 5000);
    // На случай если юзер сам сменит страницу до перенаправления
    return () => clearTimeout(timeout);
  }, []);


  return  (
    <h3>Страница не существует. Перенаправляем на главную страницу...</h3>
  )
}

export default NotFound;
