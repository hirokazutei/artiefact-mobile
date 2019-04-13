import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Inset from "../../atoms/Inset";
import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import Outset from "../../atoms/Outset";
import Text from "../../atoms/Text";
import ShiftingTitle from "../../atoms/ShiftingTitle";
import RadioSelection from "../../molecules/RadioSelection";
import { Props } from "../../pages/SignUpPage";
import IOSDatePicker from "../../organism/DatePicker/ios";

type Styles = {
  base: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

const SignUpTemplate: React.FC<Props> = (props: Props): React.ReactElement => {
  const {
    agreeToTerms,
    email,
    isButtonDisabled,
    onChangeEmail,
    onChangePassword,
    onChangeUsername,
    onPressCancelModal,
    onPressConfirmModal,
    onPressSetBirthday,
    onPressSignUp,
    onPressTerms,
    password,
    showDatePickerModal,
    username
  } = props;
  return (
    <View style={styles.base}>
      <IOSDatePicker
        isVisible={showDatePickerModal}
        cancelButton={{ onPress: onPressCancelModal, label: "Cancel" }}
        confirmButton={{ onPress: onPressConfirmModal, label: "Confirm" }}
        mode="date"
      />
      <Inset paddingHorizontal="macro" paddingBottom="macro">
        <Text size="massive" color="secondary" weight="bold" align="center">
          {"Adventure Awaits,"}
        </Text>
        <Outset marginBottom="huge">
          <ShiftingTitle color="secondary" />
        </Outset>
        <Outset marginBottom="huge">
          <InputField
            placeholder="Username"
            color="secondary"
            onChangeText={onChangeUsername}
            value={username}
          />
        </Outset>
        <Outset marginBottom="huge">
          <InputField
            placeholder="Password"
            color="secondary"
            onChangeText={onChangePassword}
            secureTextEntry={true}
            value={password}
          />
        </Outset>
        <Outset marginBottom="huge">
          <InputField
            placeholder="Email"
            color="secondary"
            onChangeText={onChangeEmail}
            value={email}
          />
        </Outset>
        <Outset marginBottom="huge">
          <Button
            size="massive"
            label="birthday"
            onPress={onPressSetBirthday}
          />
        </Outset>
        <Outset marginBottom="huge">
          <RadioSelection
            checked={agreeToTerms}
            color="secondary"
            onPress={onPressTerms}
          >
            {"Agree to Terms & Con"}
          </RadioSelection>
        </Outset>
        <Button
          size="massive"
          color={isButtonDisabled ? "disabled" : "secondary"}
          label="Sign Up"
          isDisabled={isButtonDisabled}
          onPress={onPressSignUp}
        />
      </Inset>
    </View>
  );
};

export default SignUpTemplate;
