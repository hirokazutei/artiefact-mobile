// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  array,
  boolean,
  date,
  select,
  text,
  withKnobs,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Provider from "../../../../../storybook/Provider";
import { navigationMockProp } from "../../../../../storybook/mockProps";
import { ValidationResultType } from "../../../molecules/ValidationField";
import SignUpPage, { SignUpPageProps } from "../component";

const DEFAULT_PROPS: SignUpPageProps = {
  agreeToTerms: false,
  changedBirthday: false,
  email: "",
  emailErrors: [],
  emailValidationStatus: "error",
  isButtonDisabled: false,
  isUsernameValidating: false,
  onChangeEmail: action("email-changed"),
  onChangeUsername: action("username-changed"),
  onChangePassword: action("password-changed"),
  onPressCancelModal: action("modal-cancel-pressed"),
  onPressConfirmModal: action("modal-confirm-pressed"),
  onPressSetBirthday: action("birthday-set-pressed"),
  onPressSignUp: action("sign-up-pressed"),
  onPressTerms: action("terms-pressed"),
  onPressBack: action("back-pressed"),
  password: "",
  passwordErrors: [],
  passwordValidationStatus: "error",
  showDatePickerModal: false,
  username: "",
  usernameErrors: [],
  usernameValidationStatus: "error",
};

const selectValidationStatus: Array<ValidationResultType> = [
  "success",
  "warning",
  "error",
];

const getRequiredProps = (
  overrides: Partial<SignUpPageProps> = {}
): SignUpPageProps => {
  const {
    agreeToTerms,
    changedBirthday,
    email,
    emailErrors,
    emailValidationStatus,
    isButtonDisabled,
    isUsernameValidating,
    onChangeEmail,
    onChangeUsername,
    onChangePassword,
    onPressCancelModal,
    onPressConfirmModal,
    onPressSetBirthday,
    onPressSignUp,
    onPressTerms,
    onPressBack,
    password,
    passwordErrors,
    passwordValidationStatus,
    showDatePickerModal,
    username,
    usernameErrors,
    usernameValidationStatus,
  } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    agreeToTerms: boolean("Agree to Terms", agreeToTerms),
    changedBirthday: boolean("Changed Birthday", changedBirthday),
    email: text("Email", email),
    emailErrors: array("Email Errors", emailErrors),
    emailValidationStatus: select(
      "Email Validation Status Options",
      selectValidationStatus,
      emailValidationStatus
    ),
    isButtonDisabled: boolean("Button Disabled", isButtonDisabled),
    isUsernameValidating: boolean("Username Validating", isUsernameValidating),
    onChangeEmail,
    onChangeUsername,
    onChangePassword,
    onPressCancelModal,
    onPressConfirmModal,
    onPressSetBirthday,
    onPressSignUp,
    onPressTerms,
    onPressBack,
    password: text("Password", password),
    passwordErrors: array("Password Errors", passwordErrors),
    passwordValidationStatus: select(
      "Password Validation Status Options",
      selectValidationStatus,
      passwordValidationStatus
    ),
    showDatePickerModal: boolean("Show DatePicker Modal", showDatePickerModal),
    username: text("Username", username),
    usernameErrors: array("Username Errors", usernameErrors),
    usernameValidationStatus: select(
      "Username Validation Status Options",
      selectValidationStatus,
      usernameValidationStatus
    ),
  };
};

const getOptionalProps = (
  overrides: Partial<SignUpPageProps> = {}
): Partial<SignUpPageProps> => {
  const { birthday } = {
    ...overrides,
  };
  return {
    birthday: new Date(date("birthday", birthday)),
  };
};

storiesOf("Pages/SignUpPage", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} fullPage={true} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <SignUpPage
      navigation={navigationMockProp}
      {...getRequiredProps()}
      {...getOptionalProps()}
    />
  ));
