import React from "react";
import styles from "./SampleComponent.module.scss";
import { useSampleComponentLogic } from "./SampleComponent.logic";

export interface SampleComponentProps {
  text: string;
}

export const SampleComponent: React.FunctionComponent<SampleComponentProps> = (
  props,
) => {
  const logic = useSampleComponentLogic(props);
  const [text, setText] = logic.useText();

  return (
    <div className={styles.style}>
      <h1>{text}</h1>
      <button
        onClick={() => {
          setText("Text changed");
        }}
      >
        Change Text
      </button>
    </div>
  );
};
