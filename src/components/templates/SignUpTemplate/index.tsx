import React from "react";
import { StyleSheet, View, ViewStyle, TouchableOpacity } from "react-native";
import Space from "../../atoms/Space";
import Button from "../../atoms/Button";
import { Title, Caption } from "../../atoms/Text";
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
  return (
    <View style={styles.base}>
      <IOSDatePicker
        isVisible={showDatePickerModal}
        cancelButton={{ onPress: onPressCancelModal, title: "Cancel" }}
        confirmButton={{ onPress: onPressConfirmModal, title: "Confirm" }}
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
          onChangeText={onChangeUsername}
          value={username}
          errors={usernameErrors}
          validationResult={usernameValidationStatus}
          isValidating={isUsernameValidating}
        />
        <Space.Stack size="huge" />
        <ValidationField
          placeholder="Password"
          color="secondary"
          onChangeText={onChangePassword}
          secureTextEntry={true}
          value={password}
          validationResult={passwordValidationStatus}
          errors={passwordErrors}
        />
        <Space.Stack size="huge" />
        <ValidationField
          placeholder="Email"
          color="secondary"
          onChangeText={onChangeEmail}
          value={email}
          validationResult={emailValidationStatus}
          errors={emailErrors}
        />
        <Space.Stack size="huge" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "flex-end" }}>
            <Caption size="large" color="faded">
              {"Birthday:"}
            </Caption>
          </View>
          <TouchableOpacity
            style={{ justifyContent: "flex-end" }}
            onPress={onPressSetBirthday}
          >
            <Caption size="large" color="secondary">
              {birthdayField}
            </Caption>
          </TouchableOpacity>
        </View>
        <Space.Stack size="huge" />
        <RadioSelection
          active={agreeToTerms}
          color="secondary"
          onPress={onPressTerms}
        >
          {"Agree to Terms & Con"}
        </RadioSelection>
        <Space.Stack size="huge" />
        <Button
          size="massive"
          color={secondaryButtonColor}
          title="Sign Up"
          isDisabled={isButtonDisabled}
          onPress={onPressSignUp}
        />
      </Space.Inset>
    </View>
  );
};

export default SignUpTemplate;
