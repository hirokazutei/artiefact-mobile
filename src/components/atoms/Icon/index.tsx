import React from "react";
import RNVIcon from "react-native-vector-icons/Feather";
import { colors, ColorTypeKeys } from "../../../symbols/colors";

export type IconTypes =
  | "successCircle"
  | "errorCircle"
  | "warningCircle"
  | "noConnection";
type FeatherIconNames =
  | "check-circle"
  | "x-circle"
  | "alert-circle"
  | "wifi-off";

const IconType: Readonly<{ [key in IconTypes]: FeatherIconNames }> = {
  successCircle: "check-circle",
  errorCircle: "x-circle",
  warningCircle: "alert-circle",
  noConnection: "wifi-off"
};

export type IconSizeKeys =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive"
  | "macro";

const iconSize: Readonly<{ [key in IconSizeKeys]: number }> = {
  tiny: 12,
  small: 16,
  medium: 24,
  large: 32,
  huge: 56,
  massive: 72,
  macro: 104
};

type Props = {
  name: IconTypes;
  size: IconSizeKeys;
  color: ColorTypeKeys;
};

/**
 * Icon
 *
 * @param props - properties
 * @param props.name - name of Icon
 * @param props.size - size of Icon
 */
const Icon: React.FC<Props> = (props: Props): React.ReactElement => {
  const size = iconSize[props.size];
  const color = colors[props.color];
  const name = IconType[props.name];
  return <RNVIcon name={name} size={size} color={color} />;
};

export default Icon;
