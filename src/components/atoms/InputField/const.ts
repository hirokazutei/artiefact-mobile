import { InputFieldSizeProps } from "react-native-kinpaku-ui";

type InputFieldSizeKey = "small" | "medium" | "large";

const inputFieldSizes: {
  [key in InputFieldSizeKey | "default"]: InputFieldSizeProps
} = {
  small: {
    borderWidth: 2,
    fontSize: 10,
    padding: 6,
  },
  medium: {
    borderWidth: 2,
    fontSize: 12,
    padding: 8,
  },
  large: {
    borderWidth: 2,
    fontSize: 14,
    padding: 10,
  },
  default: {
    borderWidth: 2,
    fontSize: 12,
    padding: 8,
  },
};

export { InputFieldSizeKey, inputFieldSizes };
