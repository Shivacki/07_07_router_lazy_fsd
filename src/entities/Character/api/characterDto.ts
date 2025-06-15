type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
type CharacterSpecies = 'Human' | 'Alien';
type CharacterType = '' | 'Genetic experiment' | 'Superhuman (Ghost trains summoner)' | 'Human with antennae' | 'Human with ants in his eyes' | string;
type CharacterGender = 'Male' | 'Female' | 'Genderless';  // Genderless - for example, robot or machine
type CharacterPathToImage = string;  // например, https://rickandmortyapi.com/api/character/avatar/1.jpeg
type DateTimeISO8601 = string;

export interface CharacterDto {
  id: number;
  name: string;
  status: CharacterStatus;
  species: CharacterSpecies;
  type: CharacterType;
  gender: CharacterGender;
  image: CharacterPathToImage;
  created: DateTimeISO8601;   
}

export type CharactersDto = CharacterDto[] | null;

