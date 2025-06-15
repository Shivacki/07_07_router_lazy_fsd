export const ROUTER_PATHS = {
  home: '/',
  about: '/about',
  characters: '/characters',
  locations: '/locations',
  episodes: '/episodes',
  login: '/login', 
  logout: '/logout', 
}


export const ROUTER_TITLE_CHARACTERS = 'Персонажи';
export const ROUTER_TITLE_LOCATIONS = 'Локации';
export const ROUTER_TITLE_EPISODES = 'Эпизоды';

// Наименования для машрутов
export const ROUTER_PATHS_TITLE_MATCHING = new Map([
  [ROUTER_PATHS.characters, ROUTER_TITLE_CHARACTERS],
  [ROUTER_PATHS.locations, ROUTER_TITLE_LOCATIONS],
  [ROUTER_PATHS.episodes, ROUTER_TITLE_EPISODES],
])

