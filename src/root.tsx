// components/Hello.tsx
import React from "react";
import { Provider } from "react-redux";
import { Action, Store } from "redux";
import configureStore from "./redux/configureStore";
import App from "./app";

const store: Store<Object, Action> = configureStore();

const Root: React.FC = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
