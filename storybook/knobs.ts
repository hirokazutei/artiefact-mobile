import { FlexAlignType, TextStyle } from "react-native";

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

export { alignSelect, selectTextAlign };
