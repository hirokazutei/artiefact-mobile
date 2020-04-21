import { CheckBoxSizeProps } from "react-native-kinpaku-ui";

type CheckBoxSizeKey = "small" | "medium" | "large";

const checkBoxSizes: {
  [key in CheckBoxSizeKey | "default"]: CheckBoxSizeProps
} = {
  small: {
    size: 16,
  },
  medium: {
    size: 20,
  },
  large: {
    size: 24,
  },
  default: {
    size: 20,
  },
};

export { CheckBoxSizeKey, checkBoxSizes };
