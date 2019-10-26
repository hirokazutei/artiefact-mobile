import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Props } from "../../pages/SignInPage/Component";
import Space from "../../atoms/Space";
import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
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
      <Space.Inset horizontal="macro" bottom="macro">
        <Text size="massive" color="primary" weight="bold">
          {"Welcome Back,"}
        </Text>
        <ShiftingTitle color="primary" />
        <Space.Stack size="huge" />
        <InputField
          placeholder="Username"
          onChangeText={onChangeUsername}
          value={username}
        />
        <Space.Stack size="huge" />
        <InputField
          placeholder="Password"
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
        />
        <Space.Stack size="huge" />
        <Button size="massive" title="Login" onPress={onPressSignIn} />
      </Space.Inset>
    </View>
  );
};

export default SignInTemplate;
