import { useState } from "react";
import { SampleComponentProps } from "./SampleComponent";

export const useSampleComponentLogic = (props: SampleComponentProps) => ({
  useText: (): [text: string, setText: (state: string) => void] => {
    const [text, setText] = useState<string>(props.text);
    return [text, setText];
  },
});
