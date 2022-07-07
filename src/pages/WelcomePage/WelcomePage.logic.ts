import { WelcomePageProps } from "./WelcomePage";
import { useAppSelector } from "store";
import { City } from "models/City";
import { useEffect, useState } from "react";
import { WeatherData, WeatherState } from "hooks/useWeather";

export const useWelcomePageLogic = (props: WelcomePageProps) => {
    return {
        useCity: (currentConditions: WeatherData | WeatherState, cityLink?: string) => {
            const cities = useAppSelector((state) => state.starredCities);
            const [city, setCity] = useState<City|undefined>();

            const getCity = (name: string, link: string): City => {
                for (const city of cities) {
                    if (city.name === name) return city;
                }

                return new City(name, link);
            };

            useEffect(() => {
                if (cityLink && (currentConditions as WeatherData).name) {
                    setCity(getCity((currentConditions as WeatherData).name, "/" + cityLink));
                }
            }, [currentConditions])

            return city;
        }
    }
}