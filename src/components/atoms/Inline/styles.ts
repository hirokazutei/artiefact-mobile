import { StyleSheet, ViewStyle } from "react-native";
import { spacing, SpacingKeys } from "../../../symbols";

export type StyleProps = {
  value?: SpacingKeys;
};

type Styles = {
  inline: ViewStyle;
};

/**
 * Stylize Inline
 */
export const stylizeInline = (styleProps: StyleProps): Styles => {
  const { value } = styleProps;
  return StyleSheet.create<Styles>({
    inline: {
      width: value && spacing[value]
    }
  });
};
