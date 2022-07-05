import { SampleComponentProps } from "./SampleComponent";
import { useState } from "react";

export const useSampleComponentLogic = (props: SampleComponentProps) => {
    return {
        useText: (): [
            text: string,
            setText: (state: string) => void
        ] => {
            const [text, setText] = useState<string>(props.text);
            return [text, setText];
        }
    }
}