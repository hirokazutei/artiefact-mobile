import { FlexAlignType, TextStyle } from "react-native";
import { TextColorKeys } from "../src/symbols/colors";

type AlignKeys = "baseline" | "center" | "flexStart" | "flexEnd" | "stretch";

const alignSelect: { [key in AlignKeys]: FlexAlignType } = {
  baseline: "baseline",
  center: "center",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  stretch: "stretch"
};

const selectTextAlign: {
  [key in NonNullable<TextStyle["textAlign"]>]: TextStyle["textAlign"];
} = {
  auto: "auto",
  left: "left",
  right: "right",
  center: "center",
  justify: "justify"
};

const selectTextColor: { [key in TextColorKeys]: TextColorKeys } = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  disabled: "disabled",
  text: "text",
  danger: "danger",
  faded: "faded"
};

export { alignSelect, selectTextAlign, selectTextColor };
