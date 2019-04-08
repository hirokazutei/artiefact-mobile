import { StyleSheet, TextStyle } from "react-native";
import * as symbols from "../../../symbols";

export type StyleProps = {
  color?: symbols.text.TextColorKeys;
};

const defaultStyle: Readonly<Required<StyleProps>> = {
  color: "default" as symbols.text.TextColorKeys
};

/**
 * Resolve Text Colors
 *
 * @param color - color key
 */
const resolveTextColors = (
  color: symbols.text.TextColorKeys = defaultStyle.color
): string => {
  return symbols.text.textColors[color];
};

type Styles = {
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
    text: {
      color: resolveTextColors(color),
      fontSize: symbols.text.textSizes["macro"],
      fontWeight: symbols.text.textWeights["bold"]
    }
  });
};
