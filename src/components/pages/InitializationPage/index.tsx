import React, { useEffect } from "react";
import LoadingTemplate from "../../templates/LoadingTemplate";
import { initizationActionCreator } from "../../../logics/initialization/actionCreator";
import store from "../../../store";

const InitializationPage: React.FC = (): React.ReactElement => {
  useEffect(() => {
    const { dispatch } = store;
    dispatch(initizationActionCreator());
  });
  return <LoadingTemplate />;
};

export default InitializationPage;
