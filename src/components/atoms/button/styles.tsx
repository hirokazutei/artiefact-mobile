import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import * as symbols from "../../../symbols";

export interface StyleProps {
  color?: ButtonColorKeys;
  size?: ButtonSizeKeys;
}

type ButtonColorKeys = "primary" | "secondary" | "disabled";

type textColorKeys = "white";

type ButtonSizeKeys =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive";

const buttonColors: { [key in ButtonColorKeys]: string } = {
  primary: symbols.colors.primary,
  secondary: symbols.colors.secondary,
  disabled: symbols.colors.disabled
};

const textColors: { [key in textColorKeys]: string } = {
  white: symbols.colors.white
};

type Sizes = { [key in ButtonSizeKeys]: number };

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

const defaultStyle = {
  color: "primary" as ButtonColorKeys,
  size: "medium" as ButtonSizeKeys
};

const resolveBottonColors = (
  color: ButtonColorKeys = defaultStyle.color
): string => {
  return buttonColors[color];
};

const resolveButtonPaddingSizes = (
  size: ButtonSizeKeys = defaultStyle.size
): number => {
  return buttonPaddingSizes[size];
};

const resolveButtonTextSizes = (
  size: ButtonSizeKeys = defaultStyle.size
): number => {
  return buttonTextSizes[size];
};

interface Styles {
  button: ViewStyle;
  text: TextStyle;
  buttonDisabled: ViewStyle;
  buttonStretched: ViewStyle;
}

export const stylizeButton = (styleProps: StyleProps): Styles => {
  const { color, size } = styleProps;
  return StyleSheet.create<Styles>({
    button: {
      borderRadius: symbols.buttonBorders.radius.round,
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
