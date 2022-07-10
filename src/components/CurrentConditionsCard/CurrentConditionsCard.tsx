import React from "react";
import styles from "components/CurrentConditionsCard/CurrentConditionsCard.module.scss";
import { useDayCardLogic } from "components/CurrentConditionsCard/CurrentConditionsCard.logic";
import { City } from "models/City";

export interface CurrentConditionsCardProps {
  city: City;
  temp: number;
  type: string;
  date: Date;
}

export const CurrentConditionsCard: React.FunctionComponent<
  CurrentConditionsCardProps
> = (props) => {
  const logic = useDayCardLogic(props);
  const {
    temp, type, date, city,
  } = props;

  const [imageUrl, fontColor, starFilter] = logic.useBackgroundImageUrl();
  const [isInStarred, onStarredClick] = logic.useStarredCities();

  return (
    <div
      className={styles["current-card"]}
      style={{
        backgroundImage: `url('${imageUrl}')`,
        color: fontColor,
      }}
    >
      <div className={styles.conditions}>
        Current conditions:
        <h1>
          {Math.floor(temp - 273.15)}
          °C
        </h1>
        <p>{type}</p>
        <p className={styles.last}>
          {`${date.getHours()}:${date.getMinutes()}`}
        </p>
      </div>
      <div className={styles["location-info"]}>
        <span>
          <h1>{city.name}</h1>
          <button onClick={onStarredClick}>
            <img
              style={{
                filter: starFilter,
              }}
              src={
                isInStarred
                  ? "star_black_24dp.svg"
                  : "star_outline_black_24dp.svg"
              }
              alt="star"
            />
          </button>
        </span>
      </div>
    </div>
  );
};
