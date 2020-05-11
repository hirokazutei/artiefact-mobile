import React from "react";
import { NavigationParams, NavigationNavigatorProps } from "react-navigation";
import SignUpPageTemplate from "../../templates/SignUpTemplate/index";
import { StateProps, DispatchProps } from "./container";
import NavigationTitle from "../../atoms/NavigationTitle";
import BackButton from "../../atoms/NavigationBackButton";

type NavigationProps = NavigationNavigatorProps<
  {},
  {
    params: {
      onPressBack: () => void;
    };
  }
>;

type StoryshotsProps = {
  _storyshots?: boolean;
};

type Props = StateProps & DispatchProps & NavigationParams & StoryshotsProps;

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
    console.log(this.props);
    return <SignUpPageTemplate {...this.props} />;
  }
}

export { Props as SignUpPageProps };

export default SignUpPage;
