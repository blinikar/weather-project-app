import React from "react";
import styles from "./DayCard.module.scss";
import { useDayCardLogic } from "./DayCard.logic";

export interface DayCardProps {
    temp: number;
    type: "cloudy" | "sunny" | "rainy" | "thunderstorm";
    icon : string;
    date: Date;
}

export const DayCard:React.FunctionComponent<DayCardProps> = (props) => {

    const logic = useDayCardLogic(props);
    const { temp, type, icon, date } = props;
    const iconURL: string = "http://openweathermap.org/img/wn/" + String(icon) + "@2x.png";

    return <div className={styles["day-card"]}>
        <h3 className={styles["day"]}>{date.getDay()}</h3>
        <img className={styles["img"]} src = {iconURL} alt = ""></img>
        <p className={styles["day-temp"]}>{temp}°C</p>
    </div>
}