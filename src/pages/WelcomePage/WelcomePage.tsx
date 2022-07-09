import React, { useEffect } from "react";
import { DayCard } from "components/DayCard";
import { CurrentConditionsCard } from "components/CurrentConditionsCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StarredCities } from "components/StarredCities/StarredCities";
import { useCurrentWeather, WeatherData } from "hooks/useWeather";
import { useForecast } from "hooks/useForecast";
import { useWelcomePageLogic } from "./WelcomePage.logic";
import styles from "./WelcomePage.module.scss";

export interface WelcomePageProps {}

export const WelcomePage: React.FunctionComponent<WelcomePageProps> = (
  props,
) => {
  const logic = useWelcomePageLogic(props);
  const params = useParams();
  const navigate = useNavigate();

  const [currentConditions, fetchCurrentConditions] = useCurrentWeather();
  const [forecast, fetchForecast] = useForecast();

  useEffect(() => {
    if (!params.city) navigate("/innopolis");
    else {
      fetchCurrentConditions(params.city);
      fetchForecast(params.city);
    }
  }, [params]);

  const city = logic.useCity(currentConditions, params.city);

  return (
    <div className={styles["welcome-page"]}>
      <StarredCities />
      { currentConditions.cod === 200 && city ? (
        <CurrentConditionsCard
          city={city}
          temp={currentConditions.main.temp}
          type={currentConditions.weather[0].main}
          date={new Date()}
        />
      ) : (
        <div className={styles.skeleton} />
      )}

      <div className={styles["day-cards"]}>
        {
          (forecast.cod === "200") && forecast.list.map((e, i) => (
            <DayCard
              key={i}
              temp={e.main.temp}
              dt={e.dt}
              icon={e.weather[0].icon}
            />
          ))
        }
      </div>
      <Link to="/feedback">
        <p>Wrong forecast?</p>
      </Link>
    </div>
  );
};
