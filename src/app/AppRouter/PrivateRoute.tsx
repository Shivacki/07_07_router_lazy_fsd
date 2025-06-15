import { Navigate, useLocation } from 'react-router-dom'

import { useAuthContext } from '@context/AuthContextProvider';
import { ROUTER_PATHS } from '@routerPaths'
import { LoginMeta } from '@pages/Login'


interface PrivateRouteProps {
  children: React.ReactElement | null;
}

// Ограничивает доступ к children-маршрутам, если пользователь не авторизован
const PrivateRoute = ({ children }: PrivateRouteProps) => {

  const location = useLocation();
  const authContext = useAuthContext();

  /* Если юзер не авторизован, то авт. Навигируемся на login-страницу. При этом:
    1) исключаем ее из истории навигации, чтобы юзер не смог на нее вернуться по нажатию кнопки "Назад" в браузере, см. replace-prop
    2) Передаем исх. страницу, на к-ую хотел попасть юзер, чтобы после успешной авторизации со страницы Login'а 
       м.б. переключиться на нее, см. state-prop
  */
  if (!authContext?.isAuthorized()) {
    const loginMeta: LoginMeta = {targetPath: location.pathname};
    return <Navigate to={ROUTER_PATHS.login} replace state={loginMeta}/>
  }

  return children;
}

export default PrivateRoute;
