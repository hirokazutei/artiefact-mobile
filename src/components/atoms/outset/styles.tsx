import { StyleSheet, ViewStyle } from "react-native";
import { spacing, SpaceKeys } from "../../../symbols";

export type StyleProps = {
  marginBottom?: SpaceKeys;
  marginRight?: SpaceKeys;
};

interface Styles {
  outset: ViewStyle;
}

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
