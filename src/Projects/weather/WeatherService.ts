import { cityMap } from "./cityMap";
import { CityMapKeys } from "./types";

const baseHeaders = {
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
  Accept: "application/json",
};

const APIService = {
  async get(url: string) {
    const newHeaderRecord = new Headers({ ...baseHeaders });

    const requestOptions = {
      method: "GET",
      headers: newHeaderRecord,
    };

    return fetch(url, requestOptions);
  },
};

const WeatherService = {
  getData: async (cityName: CityMapKeys) =>
    APIService.get(cityMap[cityName])
      .then((response) => response.json())
      .then((json) => json),
};

export default WeatherService;
