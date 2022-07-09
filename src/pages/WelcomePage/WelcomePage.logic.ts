import { useAppSelector } from "store";
import { City } from "models/City";
import { useEffect, useState } from "react";
import { WeatherData, WeatherState } from "hooks/useWeather";
import { WelcomePageProps } from "./WelcomePage";

export const useWelcomePageLogic = (props: WelcomePageProps) => ({
  useCity: (
    currentConditions: WeatherData | WeatherState,
    cityLink?: string,
  ) => {
    const cities = useAppSelector((state) => state.starredCities);
    const [city, setCity] = useState<City | undefined>();

    useEffect(() => {
      const getCity = (name: string, link: string): City => {
        for (const c of cities) {
          if (c.name === name) return c;
        }

        return new City(name, link);
      };

      if (cityLink && (currentConditions as WeatherData).name) {
        setCity(
          getCity((currentConditions as WeatherData).name, `/${cityLink}`),
        );
      }
    }, [currentConditions]);

    return city;
  },
});
