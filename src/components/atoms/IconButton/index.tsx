import React from "react";
import { View } from "react-native";
import RNVIcon from "react-native-vector-icons/Feather";
import { colors, ColorTypeKeys } from "../../../symbols/colors";

export type IconButtonTypes = "camera";
type FeatherIconNames = "camera";

const IconType: Readonly<{ [key in IconButtonTypes]: FeatherIconNames }> = {
  camera: "camera"
};

export type IconButtonSizeKeys =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive"
  | "macro";

const iconSize: Readonly<{ [key in IconButtonSizeKeys]: number }> = {
  tiny: 12,
  small: 16,
  medium: 24,
  large: 32,
  huge: 56,
  massive: 72,
  macro: 104
};

type Props = {
  color: ColorTypeKeys;
  name: IconButtonTypes;
  size: IconButtonSizeKeys;
};

/**
 * IconButton
 *
 * @param props - properties
 * @param props.color - color of IconButton
 * @param props.name - name of IconButton
 * @param props.size - size of IconButton
 */
const Circular: React.FC<Props> = (props: Props): React.ReactElement => {
  const size = iconSize[props.size];
  const color = colors[props.color];
  const name = IconType[props.name];
  return (
    <View style={{ backgroundColor: color, borderRadius: 50, padding: 10 }}>
      <RNVIcon name={name} size={20} color={colors["white"]} />
    </View>
  );
};

/**
 * IconButton
 *
 * @param props - properties
 * @param props.color - color of IconButton
 * @param props.name - name of IconButton
 * @param props.size - size of IconButton
 */
const Icon: React.FC<Props> = (props: Props): React.ReactElement => {
  const size = iconSize[props.size];
  const color = colors[props.color];
  const name = IconType[props.name];
  return <RNVIcon name={name} size={size} color={color} />;
};

export default { Circular, Icon };
