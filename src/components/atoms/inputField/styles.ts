import { StyleSheet, TextStyle, FlexAlignType } from "react-native";
import * as symbols from "../../../symbols";

export type StyleProps = {
  // It currently does not work since we are only using TextField
  align?: FlexAlignType;
  color?: InputFieldColorKeys;
  size?: TextSizeKeys;
  disableLine?: boolean;
  isDisabled?: boolean;
  isErrornous?: boolean;
  isStretched?: boolean;
};

export type InputFieldColorKeys =
  | "primary"
  | "secondary"
  | "disabled"
  | "error";

const inputFieldColors: Readonly<{ [key in InputFieldColorKeys]: string }> = {
  primary: symbols.allColors.primary,
  secondary: symbols.allColors.secondary,
  disabled: symbols.allColors.disabled,
  error: symbols.allColors.danger
};

const defaultStyle: Readonly<Required<StyleProps>> = {
  align: "flex-start",
  color: "primary",
  size: "large",
  disableLine: false,
  isDisabled: false,
  isErrornous: false,
  isStretched: false
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
 * @param size - size key
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
  const {
    align,
    color,
    size,
    isDisabled,
    disableLine,
    isErrornous,
    isStretched
  } = styleProps;
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
      borderBottomWidth: disableLine ? 0 : symbols.borders.thickness.thin,
      ...(isStretched ? { flex: 1 } : {}),
      ...(align ? { alignSelf: align } : {})
    }
  });
};
