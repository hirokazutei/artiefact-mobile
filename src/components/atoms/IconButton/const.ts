import { TouchableAllPaddingProps } from "react-native-kinpaku-ui";

export type IconSizeKeys = "small" | "medium" | "large";

export const touchablePaddingSizes: Readonly<
  { [key in IconSizeKeys | "default"]: TouchableAllPaddingProps }
> = {
  small: {
    padding: 4,
    borderRadius: 24
  },
  medium: {
    padding: 8,
    borderRadius: 48
  },
  large: {
    padding: 12,
    borderRadius: 72
  },
  default: { padding: 8, borderRadius: 48 }
};

export const iconSizes: Readonly<
  { [key in IconSizeKeys | "default"]: number }
> = {
  small: 24,
  medium: 36,
  large: 46,
  default: 36
};

export type IconNames =
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

export const iconNames: Readonly<{ [key in IconNames]: FeatherIconNames }> = {
  camera: "camera",
  successCircle: "check-circle",
  errorCircle: "x-circle",
  warningCircle: "alert-circle",
  noConnection: "wifi-off"
};
