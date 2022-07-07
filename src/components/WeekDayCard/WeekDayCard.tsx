import React from "react";
import styles from "./WeekDayCard.module.scss";
import { useWeekDayCardLogic } from "./WeekDayCard.logic";

export interface WeekDayCardProps {
    temp: number;
    iconID: number;
    //type: "cloudy" | "sunny" | "rainy" | "thunderstorm";
    date: Date;
}

export const WeekDayCard:React.FunctionComponent<WeekDayCardProps> = (props) => {

    const logic = useWeekDayCardLogic(props);
    const { temp, iconID, date } = props;
    const icon: string = "http://openweathermap.org/img/wn/" + String(iconID) + "@2x.png";

    return <div className={styles["week-day-card"]}>
        <h1>{date.getDay()}</h1>
        <img src={icon} alt = ""> </img>
        <p>{temp}</p>
    </div>
}