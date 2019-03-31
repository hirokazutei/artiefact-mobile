import * as React from "react";
import { View } from "react-native";
import { spacing } from "../../../symbols";

type Props = {
  children: Array<React.ReactElement>;
  padding?: number;
  paddingBottom?: number;
  paddingHorizontal?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingVertical?: number;
};

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
  const { children, ...styles } = props;
  return <View style={{ ...styles }}>{children}</View>;
};

export default Inset;
