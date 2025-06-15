type LocationType = string;
type LocationDimension = string;
type DateTimeISO8601 = string;


export interface LocationDto {
  id: number;
  name: string;
  type: LocationType;
  dimension: LocationDimension;
  created: DateTimeISO8601;   
}

export type LocationsDto = LocationDto[] | null;

