import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import Outset from "../../atoms/Outset";
import Text from "../../atoms/Text";

type Styles = {
  base: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: {
    flexDirection: "column",
    justifyContent: "center"
  }
});

const SignIn: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.base}>
      <Outset marginBottom="huge">
        <Text size="macro" color="primary" weight="thicc" align="center">
          Artiefact
        </Text>
      </Outset>
      <Outset marginBottom="huge">
        <InputField placeholder="Username" />
      </Outset>
      <Outset marginBottom="huge">
        <InputField placeholder="Password" secureTextEntry={true} />
      </Outset>
      <Outset marginBottom="medium">
        <Button size="massive" color="primary" label="Login" />
      </Outset>
      <Button size="massive" color="secondary" label="SignUp" />
    </View>
  );
};

export default SignIn;
