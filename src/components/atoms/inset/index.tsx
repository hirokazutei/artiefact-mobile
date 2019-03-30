import * as React from "react";
import { View } from "react-native";
import { spacing } from "../../../symbols";

type Props = {
  children: React.ReactElement;
  padding?: typeof spacing;
  paddingBottom?: typeof spacing;
  paddingHorizontal?: typeof spacing;
  paddingLeft?: typeof spacing;
  paddingRight?: typeof spacing;
  paddingTop?: typeof spacing;
  paddingVertical?: typeof spacing;
};

/**
 * Inset
 *
 */
const Inset = (props: Props): React.ReactElement => {
  const { children, ...style } = props;
  return <View style={{ ...style }}>{children}</View>;
};
export default Inset;
