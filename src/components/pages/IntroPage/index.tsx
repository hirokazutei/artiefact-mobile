import React from "react";
import IntroTemplate from "../../templates/IntroTemplate";
import { NavigationProps } from "../../../navigation/type";
import routes from "../../../navigation/routes";

type Props = NavigationProps;

const IntroPage: React.FC<Props> = (props: Props): React.ReactElement => {
  const onPressSignUp = () =>
    props.navigation.navigate(routes.authStackRoutes.signUp);
  const onPressSignIn = () =>
    props.navigation.navigate(routes.authStackRoutes.signIn);
  return (
    <IntroTemplate
      onPressSignUp={onPressSignUp}
      onPressSignIn={onPressSignIn}
    />
  );
};

export default IntroPage;
