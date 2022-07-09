import React from "react";
import { Link } from "react-router-dom";
import styles from "./NoPage.module.scss";

interface NoPageProps {}

export const NoPage: React.FunctionComponent<NoPageProps> = (props) => (
  <div className={styles["no-page"]}>
    <h1>This page does not exists :(</h1>
    <p>We have another pages, there are also beautiful ones</p>
    <Link to="/">To the Forecast</Link>
  </div>
);
