import React from "react";
import { NavigationParams, NavigationNavigatorProps } from "react-navigation";
import SignUpPageTemplate from "../../templates/SignUpTemplate/index";
import { StateProps, DispatchProps } from "./container";
import NavigationTitle from "../../atoms/NavigationTitle";
import BackButton from "../../atoms/NavigationBackButton";

export type NavigationProps = NavigationNavigatorProps<
  {},
  {
    params: {
      onPressBack?: () => void;
    };
  }
>;

export type Props = StateProps & DispatchProps & NavigationParams;

class SignUpPage extends React.Component<Props> {
  static navigationOptions = ({ navigation }: NavigationProps) => ({
    headerTitle: <NavigationTitle>{"SIGN UP"}</NavigationTitle>,
    headerLeft: (
      <BackButton
        onPress={
          navigation &&
          navigation.state &&
          navigation.state.params &&
          navigation.state.params.onPressBack
        }
      />
    ),
  });

  componentDidMount() {
    this.props.navigation.setParams({
      onPressBack: this.props.onPressBack,
    });
  }

  render() {
    return <SignUpPageTemplate {...this.props} />;
  }
}

export default SignUpPage;
