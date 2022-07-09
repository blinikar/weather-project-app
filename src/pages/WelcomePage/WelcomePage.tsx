import React, { useEffect } from "react";
import styles from "./WelcomePage.module.scss";
import { useWelcomePageLogic } from "./WelcomePage.logic";
import { DayCard } from "components/DayCard";
import { CurrentConditionsCard } from "components/CurrentConditionsCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StarredCities } from "components/StarredCities/StarredCities";
import { useCurrentWeather, WeatherData } from "hooks/useWeather";

export interface WelcomePageProps {}

export const WelcomePage:React.FunctionComponent<WelcomePageProps> = (props) => {

    const logic = useWelcomePageLogic(props);
    const params = useParams();
    const navigate = useNavigate();

    const [currentConditions, fetchCurrentConditions] = useCurrentWeather();

    useEffect(() => {
        if (!params.city) navigate("/innopolis");
        else fetchCurrentConditions(params.city);
    }, [params]);

    const city = logic.useCity(currentConditions, params.city);

    return <div className={styles["welcome-page"]}>
        <StarredCities />
        {
            (currentConditions as WeatherData).name && city ?
                <CurrentConditionsCard
                    city={city}
                    temp={(currentConditions as WeatherData).main.temp}
                    type={"thunderstorm"}
                    date={new Date()} />
                :
                <div className={styles["skeleton"]}></div>
        }

        <div className={styles["day-cards"]}>
            <DayCard
                temp={10}
                type={"cloudy"}
                icon={"02d"}
                date={new Date(2022, 7, 9)} />
            <DayCard
                temp={10}
                type={"cloudy"}
                icon={"02d"}
                date={new Date(2022, 7, 10)} />
            <DayCard
                temp={10}
                type={"cloudy"}
                icon={"02d"}
                date={new Date(2022, 7, 11)} />
            <DayCard
                temp={10}
                type={"cloudy"}
                icon={"02d"}
                date={new Date(2022, 1, 1)} />
            <DayCard
                temp={10}
                type={"cloudy"}
                icon={"02d"}
                date={new Date(2022, 1, 1)} />
        </div>
        <Link to={"/feedback"}><p>Wrong forecast?</p></Link>
    </div>
}