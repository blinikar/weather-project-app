import React from "react";
import styles from "App.module.scss";
import { Outlet } from "react-router-dom";

function App() {
    return <>
        <div className={styles["header"]}>
            <h2 className={styles["heading"]}>Weather</h2>
        </div>
        <Outlet />
    </>
}

export default App;
