import React from "react";
import styles from "components/SearchBar/SearchBar.module.scss";
import { useSampleComponentLogic } from "components/SearchBar/SearchBar.logic";

export interface SearchBarProps {
    placeholder: string;
}

export const SearchBar:React.FunctionComponent<SearchBarProps> = (props) => {

    const logic = useSampleComponentLogic(props);
    const { placeholder } = props;

    return (
        <input
            className={styles["search-bar"]}
            placeholder={placeholder} />
    )
}