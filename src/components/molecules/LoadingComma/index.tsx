import React, { useState, useEffect, useRef } from "react";
import { Title } from "../../atoms/Text";

type Props = {
  commaLength: number;
  speed: number;
};

/**
 * Loading Comma
 *
 * @param props - props
 *
 * Required:
 * @param props.commaLength - the number of commas
 * @param props.speed - the speed of transition
 */
const LoadingComma = (props: Props) => {
  const { commaLength, speed } = props;
  const [commaCount, setCommaCount] = useState(0);
  useInterval(() => {
    setCommaCount(commaCount < commaLength ? commaCount + 1 : 0);
  }, speed);
  return <Title>{".".repeat(commaCount)}</Title>;
};

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect((): void | (() => void) => {
    const addComma = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(addComma, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export { Props as LoadingCommaProps };

export default LoadingComma;
