import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import RenderingError from '@RenderingError'


const ItemLayout = () => {

  return (
    <div>
      <h3>Описание элемента:</h3>
      
      <ErrorBoundary fallback={<RenderingError/>}>
        <Suspense fallback={<>Загрузка кода...</>}>
          <Outlet/>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default ItemLayout
