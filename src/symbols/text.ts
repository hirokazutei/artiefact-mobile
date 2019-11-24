import { colors } from "./colors";

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
  tiny: 10,
  small: 12,
  medium: 14,
  large: 16,
  huge: 24,
  massive: 32,
  macro: 48
};

// Text Color
export type TextColorKeys =
  | "danger"
  | "text"
  | "faded"
  | "primary"
  | "secondary"
  | "disabled";

export const textColors: Readonly<{ [key in TextColorKeys]: string }> = {
  danger: colors.danger,
  text: colors.text,
  faded: colors.faded,
  primary: colors.primary,
  secondary: colors.secondary,
  disabled: colors.disabled
};
