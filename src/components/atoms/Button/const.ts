import { ButtonSizeProps } from "react-native-kinpaku-ui";

type ButtonSizeKey = "tiny" | "small" | "medium" | "large" | "huge" | "massive";

const buttonSizes: Record<ButtonSizeKey | "default", ButtonSizeProps> = {
  tiny: {
    borderRadius: 4,
    fontSize: 10,
    buttonSpacing: {
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
  },
  small: {
    borderRadius: 5,
    fontSize: 12,
    buttonSpacing: {
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
  },
  medium: {
    borderRadius: 6,
    fontSize: 16,
    buttonSpacing: {
      paddingHorizontal: 12,
      paddingVertical: 6,
    },
  },
  large: {
    borderRadius: 76,
    fontSize: 20,
    buttonSpacing: {
      paddingHorizontal: 14,
      paddingVertical: 7,
    },
  },
  huge: {
    borderRadius: 8,
    fontSize: 24,
    buttonSpacing: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
  },
  massive: {
    borderRadius: 10,
    fontSize: 32,
    buttonSpacing: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
  },
  default: {
    borderRadius: 6,
    fontSize: 16,
    buttonSpacing: {
      paddingHorizontal: 12,
      paddingVertical: 6,
    },
  },
};

export { ButtonSizeKey, buttonSizes };
