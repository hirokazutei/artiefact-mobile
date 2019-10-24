import { ButtonSizeProps } from "react-native-kinpaku-ui";

type ButtonSizeKeys =
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
    horizontalPadding: 2,
    verticalPaddding: 2,
    fontSize: 8,
    borderRadius: 8
  },
  small: {
    horizontalPadding: 2,
    verticalPaddding: 2,
    fontSize: 8,
    borderRadius: 2
  },
  medium: {
    horizontalPadding: 4,
    verticalPaddding: 4,
    fontSize: 10,
    borderRadius: 4
  },
  large: {
    horizontalPadding: 4,
    verticalPaddding: 6,
    fontSize: 12,
    borderRadius: 6
  },
  huge: {
    horizontalPadding: 8,
    verticalPaddding: 8,
    fontSize: 20,
    borderRadius: 8
  },
  massive: {
    horizontalPadding: 8,
    verticalPaddding: 12,
    fontSize: 24,
    borderRadius: 12
  },
  default: {
    horizontalPadding: 4,
    verticalPaddding: 4,
    fontSize: 10,
    borderRadius: 4
  }
};
