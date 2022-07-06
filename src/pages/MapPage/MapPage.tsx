import React from "react";
import styles from "pages/MapPage/MapPage.module.scss";
import { useMapPageLogic } from "pages/MapPage/MapPage.logic";
import { SearchBar } from "components/SearchBar";

export interface MapPageProps {}

export const MapPage:React.FunctionComponent<MapPageProps> = (props) => {

    const logic = useMapPageLogic(props);

    return <div className={styles["map-page"]}>
        <SearchBar placeholder={"Find your city"} />
        <div className={styles["map"]}>

        </div>
    </div>
}