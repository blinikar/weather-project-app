import React from "react";
import styles from "pages/FeedbackPage/FeedbackPage.module.scss";
import { useWelcomePageLogic } from "pages/FeedbackPage/FeedbackPage.logic";

export interface FeedbackPageProps {}

export const FeedbackPage:React.FunctionComponent<FeedbackPageProps> = (props) => {

    const logic = useWelcomePageLogic(props);

    return <></>
}