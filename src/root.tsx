import React from "react";
import { Provider } from "react-redux";
import { Action, Store } from "redux";
import configureStore from "./redux/configureStore";
import AppContainer from "./navigation";

const store: Store<Object, Action> = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
