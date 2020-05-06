import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { SignInPageProps as Props } from "../../pages/SignInPage/component";
import Space from "../../atoms/Space";
import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import { Title } from "../../atoms/Text";
import ShiftingTitle from "../../atoms/ShiftingTitle";

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

const SignInTemplate: React.FC<Props> = (props: Props): React.ReactElement => {
  const {
    _storyshots,
    onChangeUsername,
    onChangePassword,
    onPressSignIn,
    password,
    username,
  } = props;
  return (
    <View style={styles.base}>
      <Space.Inset horizontal="macro" bottom="macro">
        <Title size="large" color="primary">
          Welcome Back,
        </Title>
        <ShiftingTitle color="primary" _storyshots={_storyshots} />
        <Space.Stack size="huge" />
        <InputField.username
          placeholder="Username"
          onChange={onChangeUsername}
          value={username}
        />
        <Space.Stack size="huge" />
        <InputField.password
          placeholder="Password"
          onChange={onChangePassword}
          value={password}
        />
        <Space.Stack size="huge" />
        <Button size="massive" label="Login" onPress={onPressSignIn} />
      </Space.Inset>
    </View>
  );
};

export default SignInTemplate;
