import React from "react";
import { NavigationNavigatorProps, NavigationParams } from "react-navigation";
import SignInTemplate from "../../templates/SignInTemplate/index";
import { StateProps, DispatchProps } from "./container";
import BackButton from "../../atoms/NavigationBackButton";
import NavigationTitle from "../../atoms/NavigationTitle";

type NavigationProps = NavigationNavigatorProps<
  {},
  {
    params: {
      onPressBack?: () => void;
    };
  }
>;

type StoryshotsProps = {
  _storyshots?: boolean;
};

type Props = StateProps & DispatchProps & NavigationParams & StoryshotsProps;

class SignInPage extends React.Component<Props> {
  static navigationOptions = ({ navigation }: NavigationProps) => {
    return {
      headerTitle: <NavigationTitle>SIGN IN</NavigationTitle>,
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
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      onPressBack: this.props.onPressBack,
    });
  }

  render() {
    return <SignInTemplate {...this.props} />;
  }
}

export { Props as SignInPageProps };

export default SignInPage;
