import { TouchableAllSizeProps } from "react-native-kinpaku-ui";

type IconSizeKey = "small" | "medium" | "large";

const touchablePaddingSizes: Record<
  IconSizeKey | "default",
  TouchableAllSizeProps
> = {
  small: {
    borderRadius: 24,
    padding: 4,
  },
  medium: {
    borderRadius: 48,
    padding: 8,
  },
  large: {
    borderRadius: 72,
    padding: 12,
  },
  default: {
    borderRadius: 48,
    padding: 8,
  },
};

const iconSizes: Record<IconSizeKey | "default", number> = {
  small: 24,
  medium: 36,
  large: 46,
  default: 36,
};

type IconNameKey =
  | "camera"
  | "errorCircle"
  | "noConnection"
  | "successCircle"
  | "warningCircle";

type FeatherIconNameKey =
  | "camera"
  | "check-circle"
  | "x-circle"
  | "alert-circle"
  | "wifi-off";

const iconNames: Record<IconNameKey, FeatherIconNameKey> = {
  camera: "camera",
  successCircle: "check-circle",
  errorCircle: "x-circle",
  warningCircle: "alert-circle",
  noConnection: "wifi-off",
};

export {
  touchablePaddingSizes,
  iconSizes,
  IconSizeKey,
  IconNameKey,
  iconNames,
};
