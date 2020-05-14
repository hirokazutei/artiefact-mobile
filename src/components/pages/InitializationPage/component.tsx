import React from "react";
import { NavigationProps } from "../../../navigation/type";
import LoadingTemplate from "../../templates/LoadingTemplate";
import { DispatchProps } from "./container";

type Props = NavigationProps & DispatchProps;

class InitializationPage extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.initialize();
  }

  render() {
    return <LoadingTemplate />;
  }
}

export default InitializationPage;
