import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Space from "../../atoms/Space";
import Button from "../../atoms/Button";
import { Title } from "../../atoms/Text";

type Styles = {
  base: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: { flex: 1, flexDirection: "column", justifyContent: "center" },
});

type Props = {
  onPressSignIn: () => void;
  onPressSignUp: () => void;
};

const IntroTemplate: React.FC<Props> = ({
  onPressSignIn,
  onPressSignUp,
}: Props): React.ReactElement => {
  return (
    <View style={styles.base}>
      <Space.Inset horizontal="macro" bottom="macro">
        <Title size="large" color="primary" align="center">
          Artiefact
        </Title>
        <Space.Stack size="medium" />
        <Button
          size="massive"
          color="primary"
          label="Login"
          onPress={onPressSignIn}
        />
        <Space.Stack size="medium" />
        <Button
          size="massive"
          color="secondary"
          label="SignUp"
          onPress={onPressSignUp}
        />
      </Space.Inset>
    </View>
  );
};

export default IntroTemplate;
