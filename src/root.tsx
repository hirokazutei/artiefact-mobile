import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AppContainer from "./navigation";
import ErrorModal from "./components/organism/ErrorModal";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ErrorModal />
        <AppContainer />
      </Provider>
    );
  }
}
