import { StyleSheet, TextStyle } from "react-native";
import * as symbols from "../../../symbols";
import { Diff } from "../../../type/tsUtility";

type AlignType = Diff<Required<TextStyle["textAlign"]>, undefined>;

export type StyleProps = {
  color?: TextColorKeys;
  size?: symbols.text.TextSizeKeys;
  italic?: Boolean;
  weight?: symbols.text.TextWeightKeys;
  align?: AlignType;
};

type TextColorKeys =
  | "danger"
  | "default"
  | "faded"
  | "primary"
  | "secondary"
  | "disabled";

const textColors: Readonly<{ [key in TextColorKeys]: string }> = {
  danger: symbols.colors.danger,
  default: symbols.colors.defaultText,
  faded: symbols.colors.faded,
  primary: symbols.colors.primary,
  secondary: symbols.colors.secondary,
  disabled: symbols.colors.disabled
};

const defaultStyle: Readonly<Required<StyleProps>> = {
  color: "default" as TextColorKeys,
  size: "medium" as symbols.text.TextSizeKeys,
  italic: false as Boolean,
  weight: "default" as symbols.text.TextWeightKeys,
  align: "auto" as AlignType
};

/**
 * Resolve Text Colors
 *
 * @param color - color key
 */
const resolveTextColors = (
  color: TextColorKeys = defaultStyle.color
): string => {
  return textColors[color];
};

/**
 * Resolve Text Sizes
 *
 * @param size - size key
 */
const resolveTextSizes = (
  size: symbols.text.TextSizeKeys = defaultStyle.size
): number => {
  return symbols.text.textSizes[size];
};

/**
 * Resolve Text Weights
 *
 * @param weight - weight key
 */
const resolveTextWeights = (
  weight: symbols.text.TextWeightKeys = defaultStyle.weight
): TextStyle["fontWeight"] => {
  return symbols.text.textWeights[weight];
};

type Styles = {
  text: TextStyle;
};

/**
 * Stylize Text
 *
 * @param styleProps - style properties
 * @param [styleProps.color] - color of text
 * @param [styleProps.size] - size of text
 * @param [styleProps.italic] - is text italic
 * @param [styleProps.weight] - weight of text
 * @param [styleProps.align] - alignment of text
 */
export const stylizeText = (styleProps: StyleProps): Styles => {
  const { color, size, italic, align, weight } = styleProps;
  const italicize = italic ? "italic" : "normal";
  return StyleSheet.create<Styles>({
    text: {
      color: resolveTextColors(color),
      fontSize: resolveTextSizes(size),
      fontStyle: italicize,
      fontWeight: resolveTextWeights(weight),
      textAlign: align
    }
  });
};
