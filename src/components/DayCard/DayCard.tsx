import React from "react";
import styles from "./DayCard.module.scss";
import { useDayCardLogic } from "./DayCard.logic";

export interface DayCardProps {
    temp: number;
    type: "cloudy" | "sunny" | "rainy" | "thunderstorm";
    iconID : string;
    date: Date;
}

export const DayCard:React.FunctionComponent<DayCardProps> = (props) => {

    const logic = useDayCardLogic(props);
    const { temp, type, iconID, date } = props;
    const icon: string = "http://openweathermap.org/img/wn/" + String(iconID) + "@2x.png";

    return <div className={styles["day-card"]}>
        <h1>{date.getDay()}</h1>
        <img src = {icon} alt = ""></img>
        <p>{temp}</p>
    </div>
}