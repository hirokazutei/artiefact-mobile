import { StyleSheet, TextStyle } from "react-native";
import * as symbols from "../../../symbols";

export interface StyleProps {
  color: TextColorKeys;
  size: TextSizeKeys;
  italic: Boolean;
  weight: TextWeightKeys;
  align: TextAlignKeys;
}

type TextColorKeys = "danger" | "default" | "faded" | "primary" | "secondary";

type TextSizeKeys = "tiny" | "small" | "medium" | "large" | "huge" | "massive";

type TextWeightKeys = "hairline" | "thin" | "default" | "bold" | "thicc";

type TextAlignKeys = "auto" | "left" | "right" | "center";

const textColors: { [key in TextColorKeys]: string } = {
  danger: symbols.colors.danger,
  default: symbols.colors.defaultText,
  faded: symbols.colors.faded,
  primary: symbols.colors.primary,
  secondary: symbols.colors.secondary
};

const textSizes: { [key in TextSizeKeys]: number } = {
  tiny: 6,
  small: 8,
  medium: 12,
  large: 16,
  huge: 24,
  massive: 30
};

const textWeights: { [key in TextWeightKeys]: TextStyle["fontWeight"] } = {
  hairline: "100",
  thin: "300",
  default: "500",
  bold: "700",
  thicc: "900"
};

const defaultStyle = {
  color: "default" as TextColorKeys,
  size: "medium" as TextSizeKeys,
  italic: false as Boolean,
  weight: "default" as TextWeightKeys,
  align: "auto" as TextAlignKeys
};

const resolveTextColors = (
  color: TextColorKeys = defaultStyle.color
): string => {
  return textColors[color];
};

const resolveTextSizes = (size: TextSizeKeys = defaultStyle.size): number => {
  return textSizes[size];
};

const resolveTextWeights = (
  weight: TextWeightKeys = defaultStyle.weight
): TextStyle["fontWeight"] => {
  return textWeights[weight];
};

interface Styles {
  text: TextStyle;
}

export const stylizeText = (styleProps: StyleProps) => {
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
