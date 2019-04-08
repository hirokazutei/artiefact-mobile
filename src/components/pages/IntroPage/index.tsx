import React from "react";
import IntroTemplate from "../../templates/IntroTemplate";
import { NavigationProps } from "../../../type/navigation";

type Props = NavigationProps;

const IntroPage: React.FC<Props> = (props: Props): React.ReactElement => {
  const onPressSignUp = () => props.navigation.navigate("SignUp");
  const onPressSignIn = () => props.navigation.navigate("SignIn");
  return (
    <IntroTemplate
      onPressSignUp={onPressSignUp}
      onPressSignIn={onPressSignIn}
    />
  );
};

export default IntroPage;
