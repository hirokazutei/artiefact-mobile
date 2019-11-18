import React, { useState, useEffect, useRef } from "react";
import { Title } from "../../atoms/Text";

type Props = {
  commaLength: number;
  speed: number;
};

const LoadingComma: React.FC<Props> = (props: Props): React.ReactElement => {
  const { commaLength, speed } = props;
  const [commaCount, setCommaCount] = useState(0);
  useInterval(() => {
    setCommaCount(commaCount < commaLength ? commaCount + 1 : 0);
  }, speed);
  // @ts-ignore
  return <Title>{".".repeat(commaCount)}</Title>;
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
