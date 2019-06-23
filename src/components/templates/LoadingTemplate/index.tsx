import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Text from "../../atoms/Text";
import { spacing } from "../../../symbols/spacing";
import { colors } from "../../../symbols/colors";

type Props = {
  message: string;
};

type Styles = {
  base: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: spacing.macro,
    backgroundColor: colors.white
  }
});

const LoadingTemplate: React.FC<Props> = (props: Props): React.ReactElement => {
  const { message } = props;
  return (
    <View style={styles.base}>
      <Text size="massive" color="primary" weight="bold">
        {message}
      </Text>
    </View>
  );
};

export default LoadingTemplate;
