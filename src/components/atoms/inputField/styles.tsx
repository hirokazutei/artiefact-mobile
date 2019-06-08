import { StyleSheet, TextStyle } from "react-native";
import { TextSizeKeys, textSizes } from "../../../symbols/text";
import * as symbols from "../../../symbols";

export type StyleProps = {
  color?: InputFieldColorKeys;
  size?: TextSizeKeys;
};

const BOTTOM_LINE_THICKNESS = 3;

type InputFieldColorKeys = "primary" | "secondary" | "disabled";

const inputFieldColors: Readonly<{ [key in InputFieldColorKeys]: string }> = {
  primary: symbols.colors.primary,
  secondary: symbols.colors.secondary,
  disabled: symbols.colors.disabled
};

const defaultStyle: Readonly<Required<StyleProps>> = {
  color: "primary" as InputFieldColorKeys,
  size: "large" as TextSizeKeys
};

/**
 * Resolve Input Field Colors
 *
 * @param color - color key
 */
const resolveInputFieldColor = (
  color: InputFieldColorKeys = defaultStyle.color
): string => {
  return inputFieldColors[color];
};

/**
 * Resolve Input Field Font Size
 *
 * @param color - color key
 */
const resolveInputFieldFontSize = (
  size: TextSizeKeys = defaultStyle.size
): number => {
  return textSizes[size];
};

type Styles = {
  inputField: TextStyle;
};

/**
 * Stylize Input Field
 */
export const stylizeInputField = (styleProps: StyleProps): Styles => {
  const { color, size } = styleProps;
  return StyleSheet.create<Styles>({
    inputField: {
      borderColor: resolveInputFieldColor(color),
      fontSize: resolveInputFieldFontSize(size),
      borderBottomWidth: BOTTOM_LINE_THICKNESS
    }
  });
};
