import React from "react";
import styles from "components/StarredCities/StarredCity/StarredCity.module.scss";
import { useNavigate } from "react-router-dom";

export interface StarredCityProps {
    name: string;
    link: string;
    onRemoveClick: () => void;
}

export const StarredCity:React.FunctionComponent<StarredCityProps> = (props) => {

    const { name, link, onRemoveClick } = props;

    const navigate = useNavigate()

    return <div className={styles["starred-city"]}>
        <button onClick={() => {navigate(link)}}>{ name }</button>
        <button
            onClick={(e) => {e.stopPropagation(); onRemoveClick()}}
            className={styles["remove"]}
        >
            <img src={"close_FILL0_wght400_GRAD0_opsz48.svg"} alt={"remove"} />
        </button>
    </div>
}