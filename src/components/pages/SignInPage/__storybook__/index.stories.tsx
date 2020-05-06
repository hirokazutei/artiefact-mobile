// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Provider from "../../../../../storybook/Provider";
import { navigationMockProp } from "../../../../../storybook/mockProps";
import SignInPage, { SignInPageProps } from "../component";

const DEFAULT_PROPS: SignInPageProps = {
  onChangePassword: action("password-changed"),
  onChangeUsername: action("username-changed"),
  onPressBack: action("back-pressed"),
  onPressSignIn: action("sign-in-pressed"),
  password: "",
  username: "",
};

const getRequiredProps = (
  overrides: Partial<SignInPageProps> = {}
): SignInPageProps => {
  const {
    onChangePassword,
    onChangeUsername,
    onPressBack,
    onPressSignIn,
    password,
    username,
  } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    onChangePassword,
    onChangeUsername,
    onPressBack,
    onPressSignIn,
    password: text("Password", password),
    username: text("Username", username),
  };
};

storiesOf("Pages/SignInPage", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} fullPage={true} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <SignInPage navigation={navigationMockProp} {...getRequiredProps()} />
  ));
