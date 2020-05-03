import { RadioButtonSizeProps } from "react-native-kinpaku-ui";

type RadioButtonSizeKey = "small" | "medium" | "large";

const radioButtonSizes: Record<
  RadioButtonSizeKey | "default",
  RadioButtonSizeProps
> = {
  small: {
    size: 16,
    dotSize: 8,
    borderThickness: 2,
  },
  medium: {
    size: 20,
    dotSize: 10,
    borderThickness: 2,
  },
  large: {
    size: 24,
    dotSize: 12,
    borderThickness: 2,
  },
  default: {
    size: 20,
    dotSize: 10,
    borderThickness: 2,
  },
};

export { RadioButtonSizeKey, radioButtonSizes };
