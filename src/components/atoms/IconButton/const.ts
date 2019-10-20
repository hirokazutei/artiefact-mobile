import { touchalbeAllPaddingProps } from "react-native-kinpaku-ui";

type IconSizeKeys = "small" | "medium" | "large";

export const touchablePaddingSizes: Readonly<
  { [key in IconSizeKeys | "default"]: TouchableAllPaddingProps }
> = {
  small: {
    padding: 4,
    borderRadius: 12
  },
  medium: {
    padding: 8,
    borderRadius: 24
  },
  large: {
    padding: 12,
    borderRadius: 36
  },
  default: { padding: 4, borderRadius: 8 }
};

export const iconSizes: Readonly<
  { [key in IconSizeKeys | "default"]: number }
> = {
  small: 16,
  medium: 24,
  large: 32,
  default: 16
};

export type IconTypes =
  | "camera"
  | "errorCircle"
  | "noConnection"
  | "successCircle"
  | "warningCircle";

type FeatherIconNames =
  | "camera"
  | "check-circle"
  | "x-circle"
  | "alert-circle"
  | "wifi-off";

export const iconTypes: Readonly<{ [key in IconTypes]: FeatherIconNames }> = {
  camera: "camera",
  successCircle: "check-circle",
  errorCircle: "x-circle",
  warningCircle: "alert-circle",
  noConnection: "wifi-off"
};
