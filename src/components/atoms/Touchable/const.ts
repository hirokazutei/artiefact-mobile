import { TouchableSizeProps } from "react-native-kinpaku-ui";

type TouchableSizeKey =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive";

const touchableSizes: {
  [key in TouchableSizeKey | "default"]: TouchableSizeProps
} = {
  tiny: {
    padding: 4,
    borderRadius: 6,
  },
  small: {
    padding: 6,
    borderRadius: 9,
  },
  medium: {
    padding: 8,
    borderRadius: 12,
  },
  large: {
    padding: 8,
    borderRadius: 16,
  },
  huge: {
    padding: 12,
    borderRadius: 18,
  },
  massive: {
    padding: 12,
    borderRadius: 24,
  },
  default: {
    padding: 8,
    borderRadius: 12,
  },
};

export { TouchableSizeKey, touchableSizes };
