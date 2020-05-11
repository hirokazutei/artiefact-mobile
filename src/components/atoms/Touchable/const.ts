import { TouchableSizeProps } from "react-native-kinpaku-ui";

type TouchableSizeKey =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive";

const touchableSizes: Record<
  TouchableSizeKey | "default",
  TouchableSizeProps
> = {
  tiny: {
    borderRadius: 6,
    touchableSpacing: {
      padding: 4,
    },
  },
  small: {
    borderRadius: 9,
    touchableSpacing: {
      padding: 6,
    },
  },
  medium: {
    borderRadius: 12,
    touchableSpacing: {
      padding: 8,
    },
  },
  large: {
    borderRadius: 16,
    touchableSpacing: {
      padding: 8,
    },
  },
  huge: {
    borderRadius: 18,
    touchableSpacing: {
      padding: 12,
    },
  },
  massive: {
    borderRadius: 24,
    touchableSpacing: {
      padding: 12,
    },
  },
  default: {
    borderRadius: 12,
    touchableSpacing: {
      padding: 8,
    },
  },
};

export { TouchableSizeKey, touchableSizes };
