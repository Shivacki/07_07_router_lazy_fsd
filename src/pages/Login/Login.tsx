import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

import Signin, { SigninInfoModel } from '@widgets/auth/ui/Signin'
import { useAuthContext } from '@context/AuthContextProvider';
import { ROUTER_PATHS } from '@routerPaths'


export interface LoginMeta {
  targetPath: string;
};


const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const authContext = useAuthContext();


  const handleSigninSubmit = async (data: SigninInfoModel) => {
    
    authContext?.signin(data.email, 
      () => {
        /* Получаем целевую страницу, на к-ую нужно переключить юзера после успешной авторизации. Это м.б.:
          1) страница, доступ к к-ой невозможен без авторизации (попали сюда из PrivateRoute) 
          2) гл. страница (юзер сам зашел на страницу авторизации)
        */
        const targetPath = (location.state as LoginMeta)?.targetPath || ROUTER_PATHS.home;
        // Навигируемся на целевую страницу, подчищая историю навигации
        navigate(targetPath, {replace: true});
      }
    );
  }

  // При попытке переключения на страницу Login при уже залогиненном юзере возвращаем обратно
  useEffect(() => {
    if (authContext?.isAuthorized()) {
      navigate(-1);
    }
  }, []);


  return (
    <>
      {!authContext?.isAuthorized() && <Signin onSubmit = {handleSigninSubmit}/>}
    </>
  )
}

export default Login;