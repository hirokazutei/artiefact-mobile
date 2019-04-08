import { TextStyle } from "react-native";
import { colors } from "./colors";

// Text Weight

export type TextWeightKeys = "hairline" | "thin" | "default" | "bold" | "thicc";

export const textWeights: Readonly<
  { [key in TextWeightKeys]: TextStyle["fontWeight"] }
> = {
  hairline: "100",
  thin: "300",
  default: "500",
  bold: "700",
  thicc: "900"
};

// Text Size

export type TextSizeKeys =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive"
  | "macro";

export const textSizes: Readonly<{ [key in TextSizeKeys]: number }> = {
  tiny: 6,
  small: 8,
  medium: 12,
  large: 16,
  huge: 24,
  massive: 32,
  macro: 48
};

// Text Color

export type TextColorKeys =
  | "danger"
  | "default"
  | "faded"
  | "primary"
  | "secondary";

export const textColors: Readonly<{ [key in TextColorKeys]: string }> = {
  danger: colors.danger,
  default: colors.defaultText,
  faded: colors.faded,
  primary: colors.primary,
  secondary: colors.secondary
};
