import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { TextColorKeys } from "../../../symbols";
import * as symbols from "../../../symbols";

export type StyleProps = {
  color?: TextColorKeys;
};

const defaultStyle: Readonly<Required<StyleProps>> = {
  color: "default" as TextColorKeys
};

/**
 * Resolve Text Colors
 *
 * @param color - color key
 */
const resolveTextColors = (
  color: TextColorKeys = defaultStyle.color
): string => {
  return symbols.text.textColors[color];
};

type Styles = {
  base: ViewStyle;
  text: TextStyle;
};

/**
 * Stylize Text
 *
 * @param styleProps - style properties
 * @param [styleProps.color] - color of text
 */
export const stylizeText = (styleProps: StyleProps): Styles => {
  const { color } = styleProps;
  return StyleSheet.create<Styles>({
    base: {
      height: symbols.spacing.macro
    },
    text: {
      color: resolveTextColors(color),
      fontSize: symbols.text.textSizes["macro"],
      fontWeight: symbols.text.textWeights["bold"]
    }
  });
};
