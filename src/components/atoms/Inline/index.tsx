import React from "react";
import { View } from "react-native";
import { stylizeInline, StyleProps } from "./styles";

/**
 * Inline
 *
 * @param props - properties
 * @param [props.value] - space value
 */
const Inline: React.FC<StyleProps> = (
  styleProps: StyleProps
): React.ReactElement => {
  const styles = stylizeInline(styleProps);
  return <View style={styles.inline} />;
};

export default Inline;
