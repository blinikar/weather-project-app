import React from "react";
import styles from "./DayCard.module.scss";
import { useDayCardLogic } from "./DayCard.logic";

export interface DayCardProps {
    temp: number;
    type: "cloudy" | "sunny" | "rainy" | "thunderstorm";
    date: Date;
}

export const DayCard:React.FunctionComponent<DayCardProps> = (props) => {

    const logic = useDayCardLogic(props);
    const { temp, type, date } = props;

    return <div className={styles["day-card"]}>
        <h1>{date.getDay()}</h1>
        <p>{type}</p>
        <p>{temp}</p>
    </div>
}