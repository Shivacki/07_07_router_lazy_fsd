import { useLocation } from 'react-router-dom'

import { CharacterDto } from '@entities/Character/api/characterDto'
import CharacterDetail from '@entities/Character/ui/CharacterDetail'


const Character = () => {

  const location = useLocation();


  return  (
    <CharacterDetail character={location.state as CharacterDto}/>
  )
}

export default Character;
