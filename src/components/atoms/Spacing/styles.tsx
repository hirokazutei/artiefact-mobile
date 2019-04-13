import { StyleSheet, ViewStyle } from "react-native";
import { spacing, SpacingKeys } from "../../../symbols";

export type StyleProps = {
  width?: SpacingKeys;
  height?: SpacingKeys;
};

type Styles = {
  spacing: ViewStyle;
};

/**
 * Stylize Spacing
 */
export const stylizeSpacing = (styleProps: StyleProps): Styles => {
  const { width, height } = styleProps;
  return StyleSheet.create<Styles>({
    spacing: {
      width: width && spacing[width],
      height: height && spacing[height]
    }
  });
};
