import { useState } from "react";
import { getCoordinates, isStartsWithNumber } from "utils/utils";
import { API_KEY } from "hooks/config";

export interface ForecastData {
  cod: string;
  coord: {
    lon: number;
    lat: number;
  };
  list: Array<{
    dt: string;
    main: {
      temp: number;
    };
    weather: Array<{
      main: string;
      icon: string;
    }>;
    description: string;
  }>;
}

export interface ForecastState {
  cod: "0" | "404";
}

interface ForecastAPIData {
  cod: string;
  coord: {
    lon: number;
    lat: number;
  };
  list: Array<{
    dt: string;
    main: {
      temp: number;
    };
    weather: Array<{
      main: string;
      icon: string;
    }>;
    description: string;
  }>;
}

export const useForecast = (): [
  forecast: ForecastData | ForecastState,
  fetchCurrentWeatherByCityName: (city: string) => void
] => {
  const [forecast, setForecast] = useState<ForecastState | ForecastData>({
    cod: "0",
  });

  const fetchForecast = (city: string) => {
    let fetchUrl;
    if (isStartsWithNumber(city)) {
      const { lon, lat } = getCoordinates(city);
      fetchUrl = "https://api.openweathermap.org/data/2.5/forecast?"
        + `lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    } else {
      fetchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
    }

    fetch(fetchUrl)
      .then((res) => res.text())
      .then((res) => JSON.parse(res) as ForecastAPIData)
      .then((res) => {
        if (res.cod === "200") {
          setForecast(res);
        } else if (res.cod === "404") {
          setForecast({ cod: "404" });
        }
      });
  };

  return [forecast, fetchForecast];
};
