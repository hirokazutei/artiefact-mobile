import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Inset from "../../atoms/Inset";
import Stack from "../../atoms/Stack";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";

type Styles = {
  base: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: { flex: 1, flexDirection: "column", justifyContent: "center" }
});

type Props = {
  onPressSignIn: () => void;
  onPressSignUp: () => void;
};

const IntroTemplate: React.FC<Props> = ({
  onPressSignIn,
  onPressSignUp
}: Props): React.ReactElement => {
  return (
    <View style={styles.base}>
      <Inset paddingHorizontal="macro" paddingBottom="macro">
        <Text size="macro" color="primary" weight="thicc" align="center">
          Artiefact
        </Text>
        <Stack value="medium" />
        <Button
          size="massive"
          color="primary"
          label="Login"
          onPress={onPressSignIn}
        />
        <Stack value="medium" />
        <Button
          size="massive"
          color="secondary"
          label="SignUp"
          onPress={onPressSignUp}
        />
      </Inset>
    </View>
  );
};

export default IntroTemplate;
