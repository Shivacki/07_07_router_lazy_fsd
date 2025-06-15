import { Ref } from 'react'
import { Link } from 'react-router-dom'


import { ROUTER_PATHS } from '@routerPaths'
import { FETCH_PATHS } from '@fetchPaths'
import { LocationsDto } from '@entities/Location/api/locationDto'
import CategoryFetcher, { getLastRef } from '@features/Category/ui/CategoryFetcher'


const renderData = (data: LocationsDto, lastNodeRef: Ref<any>) => {
  return  (
    <>
      <ul>
        {data?.map((value, index) => (
          <li key={value.id} ref={getLastRef(data?.length, index, lastNodeRef)}>
            <Link to={ROUTER_PATHS.locations + `/${value.id}`} state={value}>{value.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}


const Locations = () => {
  return (
    <CategoryFetcher<LocationsDto>
      fetchPath = {FETCH_PATHS.locations}
      renderData = {renderData}
    />
  )
}

export default Locations;
