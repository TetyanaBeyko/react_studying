import { cityMap } from "./cityMap";

export interface CurrentData {
  cloud_cover: number;
  interval: number;
  temperature_2m: number;
  time: string;
}

export interface WeatherData {
  current: CurrentData;
  current_units: object;
  elevation: number;
  generationtime_ms: number;
  hourly: object;
  hourly_units: object;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

export interface WeatherState {
  loading: boolean;
  data: WeatherData | null;
}

export type CityMapKeys = keyof typeof cityMap;
