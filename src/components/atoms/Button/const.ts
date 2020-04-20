import { ButtonSizeProps } from "react-native-kinpaku-ui";

export type ButtonSizeKeys =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive";

export const buttonSizes: Readonly<
  { [key in ButtonSizeKeys | "default"]: ButtonSizeProps }
> = {
  tiny: {
    horizontalPadding: 8,
    verticalPaddding: 4,
    fontSize: 10,
    borderRadius: 4
  },
  small: {
    horizontalPadding: 10,
    verticalPaddding: 5,
    fontSize: 12,
    borderRadius: 5
  },
  medium: {
    horizontalPadding: 12,
    verticalPaddding: 6,
    fontSize: 16,
    borderRadius: 6
  },
  large: {
    horizontalPadding: 14,
    verticalPaddding: 7,
    fontSize: 20,
    borderRadius: 76
  },
  huge: {
    horizontalPadding: 16,
    verticalPaddding: 8,
    fontSize: 24,
    borderRadius: 8
  },
  massive: {
    horizontalPadding: 20,
    verticalPaddding: 10,
    fontSize: 32,
    borderRadius: 10
  },
  default: {
    horizontalPadding: 12,
    verticalPaddding: 6,
    fontSize: 16,
    borderRadius: 6
  }
};
