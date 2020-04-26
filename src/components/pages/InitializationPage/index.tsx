import React, { useEffect } from "react";
import { NavigationProps } from "../../../navigation/type";
import LoadingTemplate from "../../templates/LoadingTemplate";
import { initizationActionCreator } from "../../../logics/initialization/actionCreator";
import store from "../../../store";

type Props = NavigationProps;

const InitializationPage: React.FC<Props> = (): React.ReactElement => {
  useEffect(() => {
    const { dispatch } = store;
    dispatch(initizationActionCreator());
  });
  return <LoadingTemplate />;
};

export default InitializationPage;
