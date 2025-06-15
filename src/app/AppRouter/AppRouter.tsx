import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { ROUTER_PATHS } from '@routerPaths'
import About from '@pages/About'
import Home from '@pages/Home'
import NotFound from '@pages/NotFound'
import Login from '@pages/Login'
import Logout from '@pages/Logout'
import CategoryLayout from '@app/Layouts/CategoryLayout'
import ItemLayout from '@app/Layouts/ItemLayout'
import PrivateRoute from './PrivateRoute'


// Динамическая загрузка компонентов
const Characters = lazy(() => import('@pages/Characters'));
const Character = lazy(() => import('@pages/Character'));
const Locations = lazy(() => import('@pages/Locations'));
const Location = lazy(() => import('@pages/Location'));
const Episodes = lazy(() => import('@pages/Episodes'));
const Episode = lazy(() => import('@pages/Episode'));
// Пример на случай отсутствия экспорта по умолчанию в модуле компонента
// const Episode = lazy(() => import('@pages/Episode').then(module => ({default: module.exportName})));


// Маршруты приложения
const AppRouter = () => {

  return (
    <Routes>
      <Route path={ROUTER_PATHS.home} element={<Home/>}/>
      <Route path={ROUTER_PATHS.about} element={<About/>}/>

      <Route path={ROUTER_PATHS.login} element={<Login/>}/>
      <Route path={ROUTER_PATHS.logout} element={<Logout/>}/>
      
      <Route element={<PrivateRoute><CategoryLayout/></PrivateRoute>}> 
        <Route path={ROUTER_PATHS.characters} element={<Characters/>}/>
        <Route path={ROUTER_PATHS.locations} element={<Locations/>}/>
        <Route path={ROUTER_PATHS.episodes} element={<Episodes/>}/>
      </Route>

      <Route element={<PrivateRoute><ItemLayout/></PrivateRoute>}> 
        <Route path={ROUTER_PATHS.characters + '/:id'} element={<Character/>}/>
        <Route path={ROUTER_PATHS.locations + '/:id'} element={<Location/>}/>
        <Route path={ROUTER_PATHS.episodes + '/:id'} element={<Episode/>}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRouter
