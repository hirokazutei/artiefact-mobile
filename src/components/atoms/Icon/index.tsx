import React from "react";
import RNVIcon from "react-native-vector-icons/Feather";
import { allColors, AllColorKeys } from "../../../symbols";

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

const iconTypes: Readonly<{ [key in IconTypes]: FeatherIconNames }> = {
  camera: "camera",
  successCircle: "check-circle",
  errorCircle: "x-circle",
  warningCircle: "alert-circle",
  noConnection: "wifi-off"
};

export type IconSizes =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive"
  | "macro";

const iconSizes: Readonly<{ [key in IconSizes]: number }> = {
  tiny: 12,
  small: 16,
  medium: 24,
  large: 32,
  huge: 56,
  massive: 72,
  macro: 104
};

export type Props = {
  name: IconTypes;
  size?: IconSizes;
  color?: AllColorKeys;
};

/**
 * Icon
 *
 * @param props - properties
 * @param props.name - name of Icon
 * @param props.size - size of Icon
 * @param props.color - color of Icon
 */
const Icon: React.FC<Props> = ({
  size = "medium",
  color = "primary",
  name
}: Props): React.ReactElement => {
  const iconSize = iconSizes[size];
  const iconColor = allColors[color];
  const iconName = iconTypes[name];
  return <RNVIcon name={iconName} size={iconSize} color={iconColor} />;
};

export default Icon;
