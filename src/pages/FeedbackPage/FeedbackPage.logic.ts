import { useState } from "react";
import { FeedbackPageProps } from "./FeedbackPage";

export interface FormValues {
  name: string;
  email: string;
  city: string;

  temperature: string;
  weatherType: string;
  additional: string;
}

export const useWelcomePageLogic = (props: FeedbackPageProps) => ({
  useFormik: (): [
    initialValues: FormValues,
    validator: (values: FormValues) => any,
    submit: (
      values: FormValues,
      { setSubmitting }: { setSubmitting: (state: boolean) => void }
    ) => void
  ] => {
    const initialValues = {
      name: "",
      email: "",
      city: "",
      temperature: "",
      additional: "",
    } as FormValues;

    const validator = (values: FormValues) => {
      const errors: typeof values | any = {};

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.city) {
        errors.city = "Required";
      }

      if (!/^$|^[+-]{0,1}\d+$/i.test(values.temperature)) {
        errors.temperature = "Invalid temperature";
      }

      return errors;
    };

    const submit = (
      values: FormValues,
      {
        setSubmitting,
      }: {
        setSubmitting: (state: boolean) => void;
      },
    ) => {
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert(
          `This very important data sent to super mega powerful mainframe for analyzing:${JSON.stringify(
            values,
            null,
            2,
          )}`,
        );
        setSubmitting(false);
      }, 400);
    };

    return [initialValues, validator, submit];
  },
  useSubmit: (): [isSubmitted: boolean, setIsSubmitted: () => void] => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const submitForm = () => {
      setIsSubmitted(true);
    };

    return [isSubmitted, submitForm];
  },
});
