import React from "react";
import styles from "./DayCard.module.scss";
import { useDayCardLogic } from "./DayCard.logic";

export interface DayCardProps {
  temp: number;
  icon: string;
  dt: string;
}

export const DayCard: React.FunctionComponent<DayCardProps> = (props) => {
  const logic = useDayCardLogic(props);
  const {
    temp, icon, dt,
  } = props;
  const iconURL = `http://openweathermap.org/img/wn/${String(icon)}@2x.png`;

  const dateTime = new Date(parseInt(dt, 10) * 1000);
  const time = `${dateTime.getHours()}:00`;
  const date = dateTime.toDateString();

  return (
    <div className={styles["day-card"]}>
      <h3 className={styles["day-temp"]}>
        {Math.floor(temp - 273.15)}
        °C
      </h3>
      <img className={styles.img} src={iconURL} alt="" />
      <p className={styles.day}>
        {date}
        <br />
        {time}
      </p>
    </div>
  );
};
