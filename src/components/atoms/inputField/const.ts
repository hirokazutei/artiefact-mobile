import { InputFieldSizeProps } from "react-native-kinpaku-ui";

type InputFieldSizeKey = "small" | "medium" | "large";

const inputFieldSizes: Record<
  InputFieldSizeKey | "default",
  InputFieldSizeProps
> = {
  small: {
    borderWidth: 2,
    fontSize: 14,
    padding: 2,
  },
  medium: {
    borderWidth: 2,
    fontSize: 16,
    padding: 2,
  },
  large: {
    borderWidth: 2,
    fontSize: 20,
    padding: 4,
  },
  default: {
    borderWidth: 2,
    fontSize: 16,
    padding: 2,
  },
};

export { InputFieldSizeKey, inputFieldSizes };
