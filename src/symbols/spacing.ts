type SpaceKeys =
  | "micro"
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive";

export const spacing: { [key in SpaceKeys]: number } = {
  micro: 2,
  tiny: 4,
  small: 8,
  medium: 12,
  large: 16,
  huge: 24,
  massive: 40
};
