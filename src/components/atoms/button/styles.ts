import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import * as symbols from "../../../symbols";

export type StyleProps = {
  color?: ButtonColorKeys;
  size?: ButtonSizeKeys;
};

type ButtonColorKeys = "primary" | "secondary" | "disabled";

type buttonTextColorKeys = "white";

type ButtonSizeKeys =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive";

const buttonColors: Readonly<{ [key in ButtonColorKeys]: string }> = {
  primary: symbols.colors.primary,
  secondary: symbols.colors.secondary,
  disabled: symbols.colors.disabled
};

const textColors: Readonly<{ [key in buttonTextColorKeys]: string }> = {
  white: symbols.colors.white
};

type Sizes = Readonly<{ [key in ButtonSizeKeys]: number }>;

const buttonPaddingSizes: Sizes = {
  tiny: 1,
  small: 2,
  medium: 4,
  large: 6,
  huge: 8,
  massive: 8
};

const buttonTextSizes: Sizes = {
  tiny: 8,
  small: 10,
  medium: 12,
  large: 16,
  huge: 20,
  massive: 24
};

const defaultStyle: Readonly<Required<StyleProps>> = {
  color: "primary" as ButtonColorKeys,
  size: "medium" as ButtonSizeKeys
};

/**
 * Resolve Button Colors
 *
 * @param color - color key
 */
const resolveBottonColors = (
  color: ButtonColorKeys = defaultStyle.color
): string => {
  return buttonColors[color];
};

/**
 * Resolve Button Padding Sizes
 *
 * @param size - size key
 */
const resolveButtonPaddingSizes = (
  size: ButtonSizeKeys = defaultStyle.size
): number => {
  return buttonPaddingSizes[size];
};

/**
 * Resolve Button Text Sizes
 *
 * @param size - size key
 */
const resolveButtonTextSizes = (
  size: ButtonSizeKeys = defaultStyle.size
): number => {
  return buttonTextSizes[size];
};

type Styles = {
  button: ViewStyle;
  text: TextStyle;
  buttonDisabled: ViewStyle;
  buttonStretched: ViewStyle;
};

/**
 * Stylize Button
 *
 * @param styleProps - style properties
 * @param [styleProps.color] - color key
 * @param [styleProps.size] - size key
 */
export const stylizeButton = (styleProps: StyleProps): Styles => {
  const { color, size } = styleProps;
  return StyleSheet.create<Styles>({
    button: {
      borderRadius: symbols.borders.radius.round,
      backgroundColor: resolveBottonColors(color),
      padding: resolveButtonPaddingSizes(size)
    },
    text: {
      color: textColors.white,
      alignSelf: "center",
      fontSize: resolveButtonTextSizes(size)
    },
    buttonDisabled: {
      backgroundColor: buttonColors.disabled
    },
    buttonStretched: {
      alignSelf: "stretch"
    }
  });
};
