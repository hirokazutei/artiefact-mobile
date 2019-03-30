// components/Hello.tsx
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import App from "./app";

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
