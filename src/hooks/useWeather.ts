import { useState } from "react";
import { API_KEY } from "hooks/config";

export interface WeatherData {
    cod: number;
    coord: {
        lon: number,
        lat: number
    };
    weather: Array<{
        description: string
    }>;
    main: {
        temp: number
    }
    name: string;
}

export interface WeatherState {
    cod: 0 | 404;
}

interface WeatherAPIData {
    cod: number;
    coord: {
        lon: number,
        lat: number
    };
    weather: Array<{
        description: string
    }>;
    main: {
        temp: number
    }
    name: string;
}

const isStartsWithNumber = (str: string) => {
    return str.startsWith("0") ||
        str.startsWith("1") ||
        str.startsWith("2") ||
        str.startsWith("3") ||
        str.startsWith("4") ||
        str.startsWith("5") ||
        str.startsWith("6") ||
        str.startsWith("7") ||
        str.startsWith("8") ||
        str.startsWith("9") ||
        str.startsWith("-");
}

export const useCurrentWeather = ():[
    weather: WeatherState|WeatherData,
    fetchCurrentWeatherByCityName: (city: string) => void
] => {

    const [weather, setWeather] = useState<WeatherState | WeatherData>({cod: 0})

    const fetchCurrentWeather = (city: string) => {

        let fetchUrl;
        if (isStartsWithNumber(city)) {
            const lat = parseInt(city.slice(0, 5)) / 100;
            const lon = parseInt(city.slice(5, 10)) / 100;
            fetchUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        } else {
            fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        }

        fetch(fetchUrl)
            .then((res) => res.text())
            .then((res) => JSON.parse(res) as WeatherAPIData)
            .then((res) => {
                if (res.cod === 200) {
                    setWeather(res);
                } else if (res.cod === 404) {
                    setWeather({cod: 404});
                }
            })

        setWeather({cod: 0});
    }

    return [weather, fetchCurrentWeather];
}
