type DateTimeISO8601 = string;

export interface EpisodeDto {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: DateTimeISO8601;   
}

export type EpisodesDto = EpisodeDto[] | null;

