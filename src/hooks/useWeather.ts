import { useState } from "react";
import { API_KEY } from "hooks/config";
import { getCoordinates, isStartsWithNumber } from "utils/utils";

export interface WeatherData {
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    main: string;
  }>;
  main: {
    temp: number;
  };
  name: string;
}

export interface WeatherState {
  cod: 0 | 404;
}

interface WeatherAPIData {
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    main: string;
  }>;
  main: {
    temp: number;
  };
  name: string;
}

export const useCurrentWeather = (): [
  weather: WeatherState | WeatherData,
  fetchCurrentWeatherByCityName: (city: string) => void
] => {
  const [weather, setWeather] = useState<WeatherState | WeatherData>({
    cod: 0,
  });

  const fetchCurrentWeather = (city: string) => {
    let fetchUrl;
    if (isStartsWithNumber(city)) {
      const { lon, lat } = getCoordinates(city);
      fetchUrl = "https://api.openweathermap.org/data/2.5/weather?"
        + `lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    } else {
      fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    }

    fetch(fetchUrl)
      .then((res) => res.text())
      .then((res) => JSON.parse(res) as WeatherAPIData)
      .then((res) => {
        if (res.cod === 200) {
          setWeather(res);
        } else if (res.cod === 404) {
          setWeather({ cod: 404 });
        }
      });

    setWeather({ cod: 0 });
  };

  return [weather, fetchCurrentWeather];
};
