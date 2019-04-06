import { StyleSheet, ViewStyle } from "react-native";
import { spacing, SpacingKeys } from "../../../symbols";

export type StyleProps = {
  marginBottom?: SpacingKeys;
  marginRight?: SpacingKeys;
};

type Styles = {
  outset: ViewStyle;
};

/**
 * Stylize Outset
 */
export const stylizeOutset = (styleProps: StyleProps): Styles => {
  const { marginBottom, marginRight } = styleProps;
  return StyleSheet.create<Styles>({
    outset: {
      marginBottom: marginBottom && spacing[marginBottom],
      marginRight: marginRight && spacing[marginRight]
    }
  });
};
