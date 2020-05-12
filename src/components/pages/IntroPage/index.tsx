import React from "react";
import IntroTemplate from "../../templates/IntroTemplate";
import { NavigationProps } from "../../../navigation/type";
import routes from "../../../navigation/routes";

type Props = NavigationProps;

class IntroPage extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const onPressSignUp = () =>
      this.props.navigation.navigate(routes.authStackRoutes.signUp);
    const onPressSignIn = () =>
      this.props.navigation.navigate(routes.authStackRoutes.signIn);
    return (
      <IntroTemplate
        onPressSignUp={onPressSignUp}
        onPressSignIn={onPressSignIn}
      />
    );
  }
}

export default IntroPage;
