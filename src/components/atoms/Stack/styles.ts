import { StyleSheet, ViewStyle } from "react-native";
import { spacing, SpacingKeys } from "../../../symbols";

export type StyleProps = {
  value?: SpacingKeys;
};

type Styles = {
  stack: ViewStyle;
};

/**
 * Stylize Stack
 */
export const stylizeStack = (styleProps: StyleProps): Styles => {
  const { value } = styleProps;
  const style = { height: value && spacing[value] };
  return StyleSheet.create<Styles>({
    stack: style
  });
};
