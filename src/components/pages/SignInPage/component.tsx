import React from "react";
import { NavigationNavigatorProps, NavigationParams } from "react-navigation";
import SignInTemplate from "../../templates/SignInTemplate/index";
import { StateProps, DispatchProps } from "./container";
import BackButton from "../../atoms/NavigationBackButton";
import NavigationTitle from "../../atoms/NavigationTitle";

export type NavigationProps = NavigationNavigatorProps<
  {},
  {
    params: {
      onPressBack?: () => void;
    };
  }
>;

export type Props = StateProps & DispatchProps & NavigationParams;

class SignInPage extends React.Component<Props> {
  static navigationOptions = ({ navigation }: NavigationProps) => {
    return {
      headerTitle: <NavigationTitle>{"SIGN IN"}</NavigationTitle>,
      headerLeft: (
        <BackButton
          onPressBack={
            navigation &&
            navigation.state &&
            navigation.state.params &&
            navigation.state.params.onPressBack
          }
        />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      onPressBack: this.props.onPressBack
    });
  }

  render() {
    return <SignInTemplate {...this.props} />;
  }
}

export default SignInPage;
