import { StyleSheet, ViewStyle } from "react-native";
import { spacing, SpacingKeys } from "../../../symbols";

export type StyleProps = {
  padding?: SpacingKeys;
  paddingBottom?: SpacingKeys;
  paddingHorizontal?: SpacingKeys;
  paddingLeft?: SpacingKeys;
  paddingRight?: SpacingKeys;
  paddingTop?: SpacingKeys;
  paddingVertical?: SpacingKeys;
};

type Styles = {
  inset: ViewStyle;
};

/**
 * Stylize Inset
 */
export const stylizeInset = (styleProps: StyleProps): Styles => {
  const {
    padding,
    paddingBottom,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingVertical
  } = styleProps;
  const style = {
    padding: padding && spacing[padding],
    paddingBottom: paddingBottom && spacing[paddingBottom],
    paddingHorizontal: paddingHorizontal && spacing[paddingHorizontal],
    paddingLeft: paddingLeft && spacing[paddingLeft],
    paddingRight: paddingRight && spacing[paddingRight],
    paddingTop: paddingTop && spacing[paddingTop],
    paddingVertical: paddingVertical && spacing[paddingVertical]
  };
  return StyleSheet.create<Styles>({
    inset: { ...style }
  });
};
