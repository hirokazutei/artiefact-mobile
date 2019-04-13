import React from "react";
import { View } from "react-native";
import { stylizeSpacing, StyleProps } from "./styles";

type Props = {
  children?: never;
} & StyleProps;

/**
 * Outset
 *
 * @param props - properties
 * @param props.children - children
 * @param [props.width] - width spacing
 * @param [props.height] - height spacing
 */
const Spacing: React.FC<Props> = (props: Props): React.ReactElement => {
  const { ...styleProps } = props;
  const styles = stylizeSpacing(styleProps);
  return <View style={styles.spacing} />;
};

export default Spacing;
