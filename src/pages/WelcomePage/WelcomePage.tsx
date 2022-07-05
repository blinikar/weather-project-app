import React from "react";
import styles from "./WelcomePage.module.scss";
import { useWelcomePageLogic } from "./WelcomePage.logic";
import { DayCard } from "components/DayCard";

export interface WelcomePageProps {}

export const WelcomePage:React.FunctionComponent<WelcomePageProps> = (props) => {

    const logic = useWelcomePageLogic(props);

    return <div className={styles["day-cards"]}>
        <DayCard
            temp={10}
            type={"cloudy"}
            date={new Date(2022, 1, 1)} />

        <DayCard
            temp={10}
            type={"cloudy"}
            date={new Date(2022, 1, 1)} />

        <DayCard
            temp={10}
            type={"cloudy"}
            date={new Date(2022, 1, 1)} />
    </div>
}