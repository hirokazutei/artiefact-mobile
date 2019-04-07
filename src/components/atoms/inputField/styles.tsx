import { StyleSheet, TextStyle } from "react-native";
import * as symbols from "../../../symbols";

export type StyleProps = {
  color?: InputFieldColorKeys;
};

type InputFieldColorKeys = "primary" | "secondary" | "disabled";

const inputFieldColors: Readonly<{ [key in InputFieldColorKeys]: string }> = {
  primary: symbols.colors.primary,
  secondary: symbols.colors.secondary,
  disabled: symbols.colors.disabled
};

const defaultStyle: Readonly<Required<StyleProps>> = {
  color: "primary" as InputFieldColorKeys
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

type Styles = {
  inputField: TextStyle;
};

/**
 * Stylize Input Field
 */
export const stylizeInputField = (styleProps: StyleProps): Styles => {
  const { color } = styleProps;

  return StyleSheet.create<Styles>({
    inputField: {
      borderColor: resolveInputFieldColor(color),
      fontSize: 20,
      borderBottomWidth: 3
    }
  });
};
