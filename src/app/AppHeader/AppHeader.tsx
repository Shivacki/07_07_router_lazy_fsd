import { NavLink, NavLinkRenderProps } from 'react-router-dom'

import { ROUTER_PATHS, ROUTER_TITLE_CHARACTERS, ROUTER_TITLE_LOCATIONS, ROUTER_TITLE_EPISODES } from '@routerPaths'
import { useAuthContext } from '@context/AuthContextProvider';


// Отображение активного маршрута в меню приложения с пом. соотв. css-класса
const getNavLinkClassName = ({ isActive }: NavLinkRenderProps) => {
  if (isActive)
    return 'activeLink'
  else
    return '';
}


// Заголовок приложения с главным меню
const AppHeader = () => {

  return (
    <>
      <ul>
        <li><NavLink to={ROUTER_PATHS.home} className={getNavLinkClassName}>Главная</NavLink></li>
        <li><NavLink to={ROUTER_PATHS.about} className={getNavLinkClassName}>О нас</NavLink></li>
        <li><NavLinkAuth/></li>
      </ul>
      <ul>
        <li><NavLink to={ROUTER_PATHS.characters} className={getNavLinkClassName}>{ROUTER_TITLE_CHARACTERS}</NavLink></li>
        <li><NavLink to={ROUTER_PATHS.locations} className={getNavLinkClassName}>{ROUTER_TITLE_LOCATIONS}</NavLink></li>
        <li><NavLink to={ROUTER_PATHS.episodes} className={getNavLinkClassName}>{ROUTER_TITLE_EPISODES}</NavLink></li>
      </ul>
    </>
  )
}

export default AppHeader


// Эл-т гл. меню с для login/logout юзера
const NavLinkAuth = () => {

  const authContext = useAuthContext();
  
  if (!authContext?.isAuthorized()) {
    return (
      <NavLink to={ROUTER_PATHS.login} className={getNavLinkClassName}>Войти</NavLink>
    )
  }
  
  return (
    <NavLink to={ROUTER_PATHS.logout} className={getNavLinkClassName}>Выйти {`(${authContext?.userName})`}</NavLink>
  )
}

