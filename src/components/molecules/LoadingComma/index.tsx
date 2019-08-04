import React, { useState, useEffect, useRef } from "react";
import { StyleProps } from "../../atoms/Text/styles";

type Props = {
  commaLength: number;
  speed: number;
  textStyles: StyleProps;
};

const LoadingComma: React.FC<Props> = (props: Props): React.ReactElement => {
  const { commaLength, speed, textStyles } = props;
  const [commaCount, setCommaCount] = useState(0);
  useInterval(() => {
    setCommaCount(commaCount < commaLength ? commaCount + 1 : 0);
  }, speed);
  // @ts-ignore
  return <Text style={...textStyles}>{".".repeat(commaCount)}</Text>;
};

function useInterval(callback: (args: any) => void, delay: number) {
  const savedCallback = useRef();

  useEffect(() => {
    // @ts-ignore
    savedCallback.current = callback;
  }, [callback]);

  useEffect((): void | (() => void | undefined) => {
    const addComma = () => {
      // @ts-ignore
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(addComma, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default LoadingComma;
