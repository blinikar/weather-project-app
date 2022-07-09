import React from "react";
import styles from "App.module.scss";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <h1 className={styles.heading}>Weather</h1>
        </Link>

        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/map">
              <li>Map</li>
            </Link>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default App;
