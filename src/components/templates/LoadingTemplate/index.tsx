import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Text from "../../atoms/Text";
import {
  TextColorKeys,
  TextSizeKeys,
  TextWeightKeys
} from "../../../symbols/text";
import { spacing } from "../../../symbols/spacing";
import { colors } from "../../../symbols/colors";
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
    backgroundColor: colors.background
  }
});

const LoadingTemplate: React.FC = (): React.ReactElement => {
  const textStyles = {
    size: "massive" as TextSizeKeys,
    color: "primary" as TextColorKeys,
    weight: "bold" as TextWeightKeys
  };
  return (
    <View style={styles.base}>
      <Text {...textStyles}>Initializing</Text>
      <LoadingComma commaLength={5} speed={500} textStyles={textStyles} />
    </View>
  );
};

export default LoadingTemplate;
