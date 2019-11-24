import React from "react";
import { View } from "react-native";
import RNVIcon from "react-native-vector-icons/Feather";
import { allColors, AllColorKeys } from "../../../symbols";

export type MapIconTypes = "user" | "text" | "image" | "audio" | "video";

type FeatherIconNames = "user" | "pen-tool" | "image" | "mic" | "video";

export const mapIcontypes: Readonly<
  { [key in MapIconTypes]: FeatherIconNames }
> = {
  user: "user",
  text: "pen-tool",
  image: "image",
  audio: "mic",
  video: "video"
};

export type MapIconSizeKeys = "small" | "medium" | "large";

const iconSizes: Readonly<{ [key in MapIconSizeKeys]: number }> = {
  small: 16,
  medium: 24,
  large: 32
};

export type Props = {
  name: MapIconTypes;
  size?: MapIconSizeKeys;
  color?: AllColorKeys;
};

/**
 * Icon
 *
 * Required:
 * @param props - properties
 * @param props.name - name of Icon
 * @param props.onPress - onPress event of icon
 *
 * Optional:
 * @param [props.size] - size of Icon
 * @param [props.color] - color of Icon
 */
const Icon: React.FC<Props> = ({
  size = "medium",
  color = "primary",
  name
}: Props): React.ReactElement => {
  const iconSize = iconSizes[size];
  const iconColor = allColors[color];
  const iconName = mapIcontypes[name];
  return (
    <View style={{ alignItems: "center" }}>
      <RNVIcon name={iconName} size={iconSize} color={iconColor} />
      <RNVIcon name={"chevron-down"} size={iconSize} color={iconColor} />
    </View>
  );
};

export default Icon;
