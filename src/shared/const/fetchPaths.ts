
export const FETCH_PATHS = {
  characters: 'https://rickandmortyapi.com/api/character',
  locations: 'https://rickandmortyapi.com/api/location',
  episodes: 'https://rickandmortyapi.com/api/episode',
}


const mockPrefix = (entity: string) => `/src/entities/${entity}/api/mock/`;

export const FETCH_PATHS_MOCK = {
  characters: mockPrefix('Character') + 'characters.json',
  episodes: mockPrefix('Episode') + 'episodes.json',
  locations: mockPrefix('Location') + 'locations.json',
}
