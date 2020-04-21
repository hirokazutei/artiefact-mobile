import { ButtonSizeProps } from "react-native-kinpaku-ui";

export type ButtonSizeKeys =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive";

export const buttonSizes: {
  [key in ButtonSizeKeys | "default"]: ButtonSizeProps
} = {
  tiny: {
    borderRadius: 4,
    fontSize: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  small: {
    borderRadius: 5,
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  medium: {
    borderRadius: 6,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  large: {
    borderRadius: 76,
    fontSize: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  huge: {
    borderRadius: 8,
    fontSize: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  massive: {
    borderRadius: 10,
    fontSize: 32,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  default: {
    borderRadius: 6,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
};
