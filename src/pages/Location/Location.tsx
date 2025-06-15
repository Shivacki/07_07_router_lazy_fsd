import { useLocation } from 'react-router-dom'

import { LocationDto } from '@entities/Location/api/locationDto'
import LocationDetail from '@entities/Location/ui/LocationDetail'


const Location = () => {

  const location = useLocation();


  return  (
    <LocationDetail location={location.state as LocationDto}/>
  )
}

export default Location;
