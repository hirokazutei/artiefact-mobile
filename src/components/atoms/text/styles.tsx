import { StyleSheet, TextStyle } from "react-native";
import * as symbols from "../../../symbols";

export type StyleProps = {
  color?: TextColorKeys;
  size?: TextSizeKeys;
  italic?: Boolean;
  weight?: TextWeightKeys;
  align?: TextAlignKeys;
};

type TextColorKeys = "danger" | "default" | "faded" | "primary" | "secondary";

type TextSizeKeys =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive"
  | "macro";

type TextWeightKeys = "hairline" | "thin" | "default" | "bold" | "thicc";

type TextAlignKeys = "auto" | "left" | "right" | "center";

const textColors: Readonly<{ [key in TextColorKeys]: string }> = {
  danger: symbols.colors.danger,
  default: symbols.colors.defaultText,
  faded: symbols.colors.faded,
  primary: symbols.colors.primary,
  secondary: symbols.colors.secondary
};

const textSizes: Readonly<{ [key in TextSizeKeys]: number }> = {
  tiny: 6,
  small: 8,
  medium: 12,
  large: 16,
  huge: 24,
  massive: 32,
  macro: 48
};

const textWeights: Readonly<
  { [key in TextWeightKeys]: TextStyle["fontWeight"] }
> = {
  hairline: "100",
  thin: "300",
  default: "500",
  bold: "700",
  thicc: "900"
};

const defaultStyle: Readonly<Required<StyleProps>> = {
  color: "default" as TextColorKeys,
  size: "medium" as TextSizeKeys,
  italic: false as Boolean,
  weight: "default" as TextWeightKeys,
  align: "auto" as TextAlignKeys
};
type Distribute<U> = U extends any ? { type: U } : never;

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
const resolveTextSizes = (size: TextSizeKeys = defaultStyle.size): number => {
  return textSizes[size];
};

/**
 * Resolve Text Weights
 *
 * @param weight - weight key
 */
const resolveTextWeights = (
  weight: TextWeightKeys = defaultStyle.weight
): TextStyle["fontWeight"] => {
  return textWeights[weight];
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
  return StyleSheet.create<Styles>({
    text: {
      color: resolveTextColors(color),
      fontSize: resolveTextSizes(size),
      fontStyle: italic ? "italic" : "normal",
      fontWeight: resolveTextWeights(weight),
      textAlign: align
    }
  });
};
