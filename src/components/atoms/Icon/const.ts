type IconTypeKey =
  | "camera"
  | "errorCircle"
  | "noConnection"
  | "successCircle"
  | "warningCircle"
  | "navigation"
  | "plus"
  | "image"
  | "rotate";

type FeatherIconNameKey =
  | "camera"
  | "check-circle"
  | "x-circle"
  | "alert-circle"
  | "wifi-off"
  | "navigation-2"
  | "plus"
  | "image"
  | "refresh-cw";

const iconTypes: Record<IconTypeKey, FeatherIconNameKey> = {
  camera: "camera",
  successCircle: "check-circle",
  errorCircle: "x-circle",
  warningCircle: "alert-circle",
  noConnection: "wifi-off",
  navigation: "navigation-2",
  plus: "plus",
  image: "image",
  rotate: "refresh-cw",
};

type IconSizeKey =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive"
  | "macro";

const iconSizes: { [key in IconSizeKey]: number } = {
  tiny: 12,
  small: 16,
  medium: 24,
  large: 32,
  huge: 56,
  massive: 72,
  macro: 104,
};

export { IconSizeKey, IconTypeKey, iconTypes, iconSizes };
