import * as React from "react";
import { View } from "react-native";
import { spacing } from "../../../symbols";
import { stylizeInset, StyleProps } from "./styles";

type Props = {
  children: Array<React.ReactElement>;
} & StyleProps;

/**
 * Inset
 *
 * @param props - Props
 * @param props.children - Children
 * @param [props.padding] - General Padding
 * @param [props.paddingBottom] - Bottom Padding
 * @param [props.paddingHorizontal] - Horizontal Padding
 * @param [props.paddingLeft] - Left Padding
 * @param [props.paddingRight] - Right Padding
 * @param [props.paddingTop] - Top Padding
 * @param [props.paddingVertical] - Vertical Padding
 */
const Inset = (props: Props): React.ReactElement => {
  const { children, ...styleProps } = props;
  const styles = stylizeInset(styleProps);
  return <View style={styles.inset}>{children}</View>;
};

export default Inset;
