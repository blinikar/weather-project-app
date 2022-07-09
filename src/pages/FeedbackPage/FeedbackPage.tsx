import React from "react";
import styles from "pages/FeedbackPage/FeedbackPage.module.scss";
import {
  FormValues,
  useWelcomePageLogic,
} from "pages/FeedbackPage/FeedbackPage.logic";
import {
  ErrorMessage, Field, Form, Formik,
} from "formik";
import { Link } from "react-router-dom";

export interface FeedbackPageProps {}

export const FeedbackPage: React.FunctionComponent<FeedbackPageProps> = (
  props,
) => {
  const logic = useWelcomePageLogic(props);

  const [initialValues, validator, submit] = logic.useFormik();
  const [isSubmitted, afterSubmit] = logic.useSubmit();

  return (
    <div className={styles["feedback-page"]}>
      {isSubmitted ? (
        <div>
          <h1>Thank you</h1>
          <p>Your opinion is very important for you</p>
          <Link to="/">Return to the forecast</Link>
        </div>
      ) : (
        <>
          <div>
            <h1>Feedback</h1>
            <p>
              Leave your feedback if weather conditions in your city are wrong
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validate={validator}
            onSubmit={(
              values: FormValues,
              {
                setSubmitting,
              }: {
                setSubmitting: (state: boolean) => void;
              },
            ) => {
              submit(values, { setSubmitting });
              afterSubmit();
            }}
          >
            {({ isSubmitting }) => (
              <Form className={styles.form}>
                <h3>Personal info</h3>
                <div className={styles.field}>
                  <Field type="text" name="name" placeholder="Your Name*" />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div className={styles.field}>
                  <Field type="email" name="email" placeholder="Your Email*" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className={styles.field}>
                  <Field type="text" name="city" placeholder="Your City*" />
                  <ErrorMessage name="city" component="div" />
                </div>
                <h3>Current conditions</h3>

                <div className={styles.field}>
                  <Field
                    type="text"
                    name="temperature"
                    placeholder="Current temperature"
                  />
                  <ErrorMessage name="temperature" component="div" />
                </div>
                <div className={styles.field}>
                  <Field
                    type="text"
                    name="weatherType"
                    placeholder="Current weather type"
                  />
                  <ErrorMessage name="weatherType" component="div" />
                </div>
                <div className={styles.field}>
                  <Field
                    type="text"
                    name="conditions"
                    placeholder="Additional info"
                    rows={5}
                    component="textarea"
                  />
                  <ErrorMessage name="conditions" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};
