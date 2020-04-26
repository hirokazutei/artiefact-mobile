export type SpacingKeys =
  | "micro"
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive"
  | "macro";

export const spacing: Readonly<{ [key in SpacingKeys]: number }> = {
  micro: 2,
  tiny: 4,
  small: 8,
  medium: 12,
  large: 16,
  huge: 24,
  massive: 40,
  macro: 64,
};
