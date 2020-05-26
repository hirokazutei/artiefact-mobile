import { TouchableSizeProps } from "react-native-kinpaku-ui";

type IconSizeKey = "small" | "medium" | "large";

const touchablePaddingSizes: Record<
  IconSizeKey | "default",
  TouchableSizeProps
> = {
  small: {
    borderRadius: 24,
    touchableSpacing: {
      padding: 4,
    },
  },
  medium: {
    borderRadius: 48,
    touchableSpacing: {
      padding: 8,
    },
  },
  large: {
    borderRadius: 72,
    touchableSpacing: {
      padding: 12,
    },
  },
  default: {
    borderRadius: 48,
    touchableSpacing: {
      padding: 8,
    },
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
  | "warningCircle"
  | "navigation";

type FeatherIconNameKey =
  | "camera"
  | "check-circle"
  | "x-circle"
  | "alert-circle"
  | "wifi-off"
  | "navigation-2";

const iconNames: Record<IconNameKey, FeatherIconNameKey> = {
  camera: "camera",
  successCircle: "check-circle",
  errorCircle: "x-circle",
  warningCircle: "alert-circle",
  noConnection: "wifi-off",
  navigation: "navigation-2",
};

export {
  touchablePaddingSizes,
  iconSizes,
  IconSizeKey,
  IconNameKey,
  iconNames,
};
