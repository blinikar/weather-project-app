import React from "react";
import styles from "./PresureCard.module.scss";
import { usePressureLogic } from "./PressureCard.logic"

export interface PressureProps {
    press: number;
    date: Date;
}

export const PressureCard:React.FunctionComponent<PressureProps> = (props) => {

    const logic = usePressureLogic(props);
    const {press, date } = props;

    return <div className={styles["pressure-card"]}>
        <h1>Pressure</h1>
        <p>{press}</p>
    </div>
}