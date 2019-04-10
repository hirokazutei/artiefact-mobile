import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Props } from "../../pages/SignInPage";
import Inset from "../../atoms/Inset";
import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import Outset from "../../atoms/Outset";
import Text from "../../atoms/Text";
import ShiftingTitle from "../../atoms/ShiftingTitle";

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

const SignInTemplate: React.FC<Props> = (props: Props): React.ReactElement => {
  const {
    onChangeUsername,
    onChangePassword,
    onPressSignIn,
    password,
    username
  } = props;
  return (
    <View style={styles.base}>
      <Inset paddingHorizontal="macro" paddingBottom="macro">
        <Text size="massive" color="primary" weight="bold">
          {"Welcome Back,"}
        </Text>
        <Outset marginBottom="huge">
          <ShiftingTitle color="primary" />
        </Outset>
        <Outset marginBottom="huge">
          <InputField
            placeholder="Username"
            onChangeText={onChangeUsername}
            value={username}
          />
        </Outset>
        <Outset marginBottom="huge">
          <InputField
            placeholder="Password"
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={true}
          />
        </Outset>
        <Button size="massive" label="Login" onPress={onPressSignIn} />
      </Inset>
    </View>
  );
};

export default SignInTemplate;
