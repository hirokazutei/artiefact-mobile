/* @flow */
import * as React from "react";
import { View } from "react-native";

type Props = {
  children: React.ReactElement;
  marginBottom?: number;
  marginRight?: number;
};

/**
 * Outset
 *
 * @param props - properties
 * @param props.children - children
 * @param [props.marginBottom] - bottom margin
 * @param [props.marginRight] - right margin
 */
const Outset = (props: Props): React.ReactElement => {
  const { children, ...style } = props;
  return <View style={{ ...style }}>{children}</View>;
};

export default Outset;
