import { useLocation } from 'react-router-dom'

import { EpisodeDto } from '@entities/Episode/api/episodeDto'
import EpisodeDetail from '@entities/Episode/ui/EpisodeDetail'


const Episode = () => {

  const location = useLocation();


  return  (
    <EpisodeDetail episode={location.state as EpisodeDto}/>
  )
}

export default Episode;
