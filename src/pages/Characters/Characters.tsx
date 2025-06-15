import { Ref } from 'react'
import { Link } from 'react-router-dom'

import { ROUTER_PATHS } from '@routerPaths'
import { FETCH_PATHS } from '@fetchPaths'
import { CharactersDto } from '@entities/Character/api/characterDto'
import CategoryFetcher, { getLastRef } from '@features/Category/ui/CategoryFetcher'


const renderData = (data: CharactersDto, lastNodeRef: Ref<any>) => {

  return  (
    <>
      <ul>
        {data?.map((value, index) => (
          <li key={value.id} ref={getLastRef(data?.length, index, lastNodeRef)}>
            <Link to={ROUTER_PATHS.characters + `/${value.id}`} state={value}>{value.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}


const Characters = () => {
  return (
    <CategoryFetcher<CharactersDto>
      fetchPath = {FETCH_PATHS.characters}
      renderData = {renderData}
    />
  )
}

export default Characters;
