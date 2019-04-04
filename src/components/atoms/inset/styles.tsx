import { StyleSheet, ViewStyle } from "react-native";
import { spacing, SpaceKeys } from "../../../symbols";

export type StyleProps = {
  padding?: SpaceKeys;
  paddingBottom?: SpaceKeys;
  paddingHorizontal?: SpaceKeys;
  paddingLeft?: SpaceKeys;
  paddingRight?: SpaceKeys;
  paddingTop?: SpaceKeys;
  paddingVertical?: SpaceKeys;
};

interface Styles {
  inset: ViewStyle;
}

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
  return StyleSheet.create<Styles>({
    inset: {
      padding: padding && spacing[padding],
      paddingBottom: paddingBottom && spacing[paddingBottom],
      paddingHorizontal: paddingHorizontal && spacing[paddingHorizontal],
      paddingLeft: paddingLeft && spacing[paddingLeft],
      paddingRight: paddingRight && spacing[paddingRight],
      paddingTop: paddingTop && spacing[paddingTop],
      paddingVertical: paddingVertical && spacing[paddingVertical]
    }
  });
};
