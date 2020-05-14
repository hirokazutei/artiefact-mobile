import React from "react";
import { View } from "react-native";
import RNVIcon from "react-native-vector-icons/Feather";
import { allColors, AllColorKey } from "../../../symbols";
import {
  mapIcontypes,
  MapIconTypeKey,
  mapIconSizes,
  MapIconSizeKey,
} from "./const";

type Props = {
  name: MapIconTypeKey;
  size?: MapIconSizeKey;
  color?: AllColorKey;
};

/**
 * Icon
 *
 * @param props - properties
 *
 * Required:
 * @param props.name - name of Icon
 * @param props.onPress - onPress event of icon
 *
 * Optional:
 * @param [props.size] - size of Icon
 * @param [props.color] - color of Icon
 */
const Icon = ({ size = "medium", color = "primary", name }: Props) => {
  const iconSize = mapIconSizes[size];
  const iconColor = allColors[color];
  const iconName = mapIcontypes[name];
  return (
    <View style={{ alignItems: "center" }}>
      <RNVIcon name={iconName} size={iconSize} color={iconColor} />
      <RNVIcon name="chevron-down" size={iconSize} color={iconColor} />
    </View>
  );
};

export { Props };

export default Icon;
