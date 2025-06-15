import './App.css'

import AppHeader from '@app/AppHeader'
import AppRouter from '@app/AppRouter'
import AuthContextProvider from '@context/AuthContextProvider'


function App() {

  return (
    <>
      <AuthContextProvider>
        <AppHeader/>
        <AppRouter/>
      </AuthContextProvider>
    </>
  )
}

export default App
