import React, { useState, useEffect, useRef } from "react";
import LoadingTemplate from "../../templates/LoadingTemplate";
import { initizationActionCreator } from "../../../logics/initialization/actionCreator";
import store from "../../../store";

const LOADING_COMMA_MAX = 5;
const COMMA_LOAD_DURATION = 500;

const InitializationPage: React.FC = (): React.ReactElement => {
  useEffect(() => {
    const { dispatch } = store;
    dispatch(initizationActionCreator());
  });
  const [commaCount, setCommaCount] = useState(0);
  useInterval(() => {
    setCommaCount(commaCount < LOADING_COMMA_MAX ? commaCount + 1 : 0);
  }, COMMA_LOAD_DURATION);
  // @ts-ignore
  const loadingMessage = `Initializing${".".repeat(commaCount)}`;
  return <LoadingTemplate message={loadingMessage} />;
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

export default InitializationPage;
