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

const SignUpTemplate: React.FC = (props: Props): React.ReactElement => {
  const { agreeToTerms, isButtonDisabled, onPressTerms } = props;
  return (
    <View style={styles.base}>
      <Inset paddingHorizontal="macro" paddingBottom="macro">
        <Text size="massive" color="secondary" weight="bold" align="center">
          {"Adventure Awaits,"}
        </Text>
        <Outset marginBottom="huge">
          <ShiftingTitle color="secondary" />
        </Outset>
        <Outset marginBottom="huge">
          <InputField placeholder="Username" color="secondary" />
        </Outset>
        <Outset marginBottom="huge">
          <InputField
            placeholder="Password"
            color="secondary"
            secureTextEntry={true}
          />
        </Outset>
        <Outset marginBottom="huge">
          <InputField placeholder="Email" color="secondary" />
        </Outset>
        <Outset marginBottom="huge">
          <InputField placeholder="Birthday" color="secondary" />
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
        />
      </Inset>
    </View>
  );
};

export default SignUpTemplate;
