import { StyleSheet, TextStyle } from "react-native";
import { TextSizeKeys, textSizes } from "../../../symbols/text";
import * as symbols from "../../../symbols";

export type StyleProps = {
  color?: InputFieldColorKeys;
  size?: TextSizeKeys;
  isDisabled?: boolean;
  isErrornous?: boolean;
};

// TODO: Standardize Line Thickness Later
const BOTTOM_LINE_THICKNESS = 3;

type InputFieldColorKeys = "primary" | "secondary" | "disabled" | "error";

const inputFieldColors: Readonly<{ [key in InputFieldColorKeys]: string }> = {
  primary: symbols.colors.primary,
  secondary: symbols.colors.secondary,
  disabled: symbols.colors.disabled,
  error: symbols.colors.danger
};

const defaultStyle: Readonly<Required<StyleProps>> = {
  color: "primary" as InputFieldColorKeys,
  size: "large" as TextSizeKeys,
  isDisabled: false,
  isErrornous: false
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
  const { color, size, isDisabled, isErrornous } = styleProps;
  let borderColor = resolveInputFieldColor(color);
  if (isDisabled) {
    borderColor = resolveInputFieldColor("disabled");
  }
  if (isErrornous) {
    borderColor = resolveInputFieldColor("error");
  }
  return StyleSheet.create<Styles>({
    inputField: {
      borderColor: borderColor,
      fontSize: resolveInputFieldFontSize(size),
      borderBottomWidth: BOTTOM_LINE_THICKNESS
    }
  });
};
