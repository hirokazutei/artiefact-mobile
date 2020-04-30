import React from "react";
import { StyleSheet, View, ViewStyle, TouchableOpacity } from "react-native";
import Space from "../../atoms/Space";
import Button from "../../atoms/Button";
import { Title, Label } from "../../atoms/Text";
import ShiftingTitle from "../../atoms/ShiftingTitle";
import RadioSelection from "../../molecules/RadioSelection";
import { Props } from "../../pages/SignUpPage/component";
import ValidationField from "../../molecules/ValidationField";
import IOSDatePicker from "../../organism/DatePicker/ios";
import { formatDate } from "../../../helper/wording";

type Styles = {
  base: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

const SignUpTemplate: React.FC<Props> = (props: Props): React.ReactElement => {
  const {
    agreeToTerms,
    birthday,
    changedBirthday,
    email,
    emailErrors,
    emailValidationStatus,
    isButtonDisabled,
    isUsernameValidating,
    onChangeEmail,
    onChangePassword,
    onChangeUsername,
    onPressCancelModal,
    onPressConfirmModal,
    onPressSetBirthday,
    onPressSignUp,
    onPressTerms,
    password,
    passwordErrors,
    passwordValidationStatus,
    showDatePickerModal,
    username,
    usernameErrors,
    usernameValidationStatus,
  } = props;
  const birthdayField =
    changedBirthday && birthday ? formatDate(birthday) : "Enter Birthday";
  const secondaryButtonColor = isButtonDisabled ? "disabled" : "secondary";
  // {/* Validation Field Needs Type secureTextEntry={true}} */}
  return (
    <View style={styles.base}>
      <IOSDatePicker
        isVisible={showDatePickerModal}
        cancelButton={{ onPress: onPressCancelModal, label: "Cancel" }}
        confirmButton={{ onPress: onPressConfirmModal, label: "Confirm" }}
        mode="date"
      />
      <Space.Inset horizontal="macro" bottom="macro">
        <Title size="large" color="secondary" align="center">
          {"Adventure Awaits,"}
        </Title>
        <ShiftingTitle color="secondary" />
        <Space.Stack size="huge" />
        <ValidationField
          placeholder="Username"
          color="secondary"
          onKeyPress={onChangeUsername}
          value={username}
          errors={usernameErrors}
          validationResult={usernameValidationStatus}
          isValidating={isUsernameValidating}
        />
        <Space.Stack size="huge" />
        <ValidationField
          placeholder="Password"
          color="secondary"
          onKeyPress={onChangePassword}
          value={password}
          validationResult={passwordValidationStatus}
          errors={passwordErrors}
        />
        <Space.Stack size="huge" />
        <ValidationField
          placeholder="Email"
          color="secondary"
          onKeyPress={onChangeEmail}
          value={email}
          validationResult={emailValidationStatus}
          errors={emailErrors}
        />
        <Space.Stack size="huge" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "flex-end" }}>
            <Label size="large" color="faded">
              {"Birthday:"}
            </Label>
          </View>
          <TouchableOpacity
            style={{ justifyContent: "flex-end" }}
            onPress={onPressSetBirthday}
          >
            <Label size="large" color="secondary">
              {birthdayField}
            </Label>
          </TouchableOpacity>
        </View>
        <Space.Stack size="huge" />
        <RadioSelection
          active={agreeToTerms}
          color="secondary"
          onPress={onPressTerms}
          label="Agree to Terms and Conditions"
        />
        <Space.Stack size="huge" />
        <Button
          size="massive"
          color={secondaryButtonColor}
          label="Sign Up"
          isDisabled={isButtonDisabled}
          onPress={onPressSignUp}
        />
      </Space.Inset>
    </View>
  );
};

export default SignUpTemplate;
