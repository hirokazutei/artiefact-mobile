import { FlexAlignType, TextStyle } from "react-native";
import { TextColorKeys, ThemePaletteKeys, AllColorKey } from "../src/symbols";

type AlignKeys = "baseline" | "center" | "flexStart" | "flexEnd" | "stretch";

const selectAlign: { [key in AlignKeys]: FlexAlignType } = {
  baseline: "baseline",
  center: "center",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  stretch: "stretch",
};

const selectTextAlign: {
  [key in NonNullable<TextStyle["textAlign"]>]: TextStyle["textAlign"]
} = {
  auto: "auto",
  left: "left",
  right: "right",
  center: "center",
  justify: "justify",
};

const selectAllColor: { [key in AllColorKey]: AllColorKey } = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  disabled: "disabled",
  background: "background",
  text: "text",
  danger: "danger",
  faded: "faded",
};

const selectThemePaletteColor: {
  [key in ThemePaletteKeys]: ThemePaletteKeys
} = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  background: "background",
  disabled: "disabled",
  text: "text",
};

const selectTextColor: { [key in TextColorKeys]: TextColorKeys } = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  disabled: "disabled",
  text: "text",
  danger: "danger",
  faded: "faded",
};

export {
  selectAlign,
  selectAllColor,
  selectTextAlign,
  selectThemePaletteColor,
  selectTextColor,
};
