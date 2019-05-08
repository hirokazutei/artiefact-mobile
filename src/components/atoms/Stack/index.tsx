import React from "react";
import { View } from "react-native";
import { stylizeStack, StyleProps } from "./styles";

/**
 * Stack
 *
 * @param props - properties
 * @param [props.value] - space value
 */
const Stack: React.FC<StyleProps> = (
  styleProps: StyleProps
): React.ReactElement => {
  const styles = stylizeStack(styleProps);
  return <View style={styles.stack} />;
};

export default Stack;
