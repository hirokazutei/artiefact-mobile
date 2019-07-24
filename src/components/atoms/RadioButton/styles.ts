import { StyleSheet, ViewStyle } from "react-native";
import * as symbols from "../../../symbols";

export type StyleProps = {
  color?: ButtonColorKeys;
};

type ButtonColorKeys = "primary" | "secondary" | "disabled";

const buttonColors: Readonly<{ [key in ButtonColorKeys]: string }> = {
  primary: symbols.colors.primary,
  secondary: symbols.colors.secondary,
  disabled: symbols.colors.disabled
};

const defaultStyle: Readonly<Required<StyleProps>> = {
  color: "primary" as ButtonColorKeys
};

/**
 * Resolve Radio Button Colors
 *
 * @param color - color key
 */
const resolveRadioBottonColors = (
  color: ButtonColorKeys = defaultStyle.color
): string => {
  return buttonColors[color];
};

type Styles = {
  radioButton: ViewStyle;
  checked: ViewStyle;
};

/**
 * Stylize Radio Button
 *
 * @param styleProps - style properties
 * @param [styleProps.color] - color key
 */
export const stylizeRadioButton = (styleProps: StyleProps): Styles => {
  const { color } = styleProps;
  const backgroundColor = resolveRadioBottonColors(color);
  return StyleSheet.create<Styles>({
    radioButton: {
      borderRadius: symbols.borders.radius.round,
      borderWidth: 1,
      borderColor: backgroundColor,
      height: symbols.spacing.huge,
      padding: symbols.spacing.micro,
      width: symbols.spacing.huge
    },
    checked: {
      flex: 1,
      borderRadius: symbols.borders.radius.round,
      backgroundColor: backgroundColor
    }
  });
};
