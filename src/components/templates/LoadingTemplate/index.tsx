import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Title } from "../../atoms/Text";
import { spacing } from "../../../symbols/spacing";
import { allColors } from "../../../symbols";
import LoadingComma from "../../molecules/LoadingComma";

type Styles = {
  base: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: spacing.macro,
    backgroundColor: allColors.background
  }
});

const LoadingTemplate: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.base}>
      <Title size="large">Initializing</Title>
      <LoadingComma commaLength={5} speed={500} />
    </View>
  );
};

export default LoadingTemplate;
