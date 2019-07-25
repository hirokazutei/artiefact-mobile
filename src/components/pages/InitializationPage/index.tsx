import React from "react";
import LoadingTemplate from "../../templates/LoadingTemplate";
import { initizationActionCreator } from "../../../logics/initialization/actionCreator";
import store from "../../../store";

const LOADING_COMMA_MAX = 5;
const COMMA_LOAD_DURATION = 500;
const MESSAGE = "Initializing";

type ComponentState = {
  loadingCommas: number;
  commaUpdate?: void;
};

class InitializationPage extends React.Component {
  state: ComponentState = {
    loadingCommas: 0
  };

  loadingComma(commas: number) {
    if (commas < LOADING_COMMA_MAX) {
      return ++commas;
    }
    return 0;
  }

  componentDidMount() {
    const { dispatch } = store;
    dispatch(initizationActionCreator());
    this.setState({
      commaUpdate: setInterval(() => {
        this.setState({
          loadingCommas: this.loadingComma(this.state.loadingCommas)
        });
      }, COMMA_LOAD_DURATION)
    });
  }

  componentWillUnmount() {
    if (!!this.state.commaUpdate) {
      clearInterval(this.state.commaUpdate);
    }
  }

  render() {
    const loadingMessage = `${MESSAGE}${".".repeat(this.state.loadingCommas)}`;
    return <LoadingTemplate message={loadingMessage} />;
  }
}

export default InitializationPage;
