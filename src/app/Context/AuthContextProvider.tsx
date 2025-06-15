import { createContext, useContext, useState, PropsWithChildren } from 'react'


type UserName = string | null;
type AfterSigninCallback = () => void;
type AfterSignoutCallback = () => void;

export interface AuthUser {
  userName: UserName;
  signin: (newUserName: string, afterSigninCallback: AfterSigninCallback) => void;
  signout: (afterSignoutCallback: AfterSignoutCallback) => void;
  isAuthorized: () => boolean;
}


const AuthContext = createContext<AuthUser | null>(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
}

/* Нужен для хранения state-данных AuthContextProvider в localStorage, чтобы избежать проблем
потери значения контекста при:
  1) "ручной" перезагрузке тек. страницы в браузере;
  2) "ручном" вводе адреса страницы в адресной строке браузера.
*/ 
const LS_KEY = 'userName';


const AuthContextProvider = ({ children }: PropsWithChildren) => {

  // Текущий залогиненный юзер
  const [userName, setUserName] = useState<UserName>(localStorage.getItem(LS_KEY) ?? null);

  const signin = (newUserName: string, afterSigninCallback: AfterSigninCallback) => {
    setUserName(newUserName);
    localStorage.setItem(LS_KEY, newUserName);
    afterSigninCallback();
  }

  const signout = (afterSignoutCallback: AfterSignoutCallback) => {
    setUserName(null);
    localStorage.removeItem(LS_KEY);
    afterSignoutCallback();
  }

  const isAuthorized = () => {
    return !!userName;
  }

  const value: AuthUser = {
    userName,
    signin,
    signout,
    isAuthorized,
  }


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContextProvider
