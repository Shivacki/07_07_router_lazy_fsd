import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '@context/AuthContextProvider';
import { ROUTER_PATHS } from '@routerPaths'


const Logout = () => {

  const authContext = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // if (authContext?.isAuthorized())
    authContext?.signout(() => navigate(ROUTER_PATHS.home, {replace: true}));
  }, []);


  return (
    <></>
  )
}

export default Logout;