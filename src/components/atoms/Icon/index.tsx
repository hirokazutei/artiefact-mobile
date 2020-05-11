import React from "react";
import RNVIcon from "react-native-vector-icons/Feather";
import { allColors, AllColorKey } from "../../../symbols";
import { IconTypeKey, IconSizeKey, iconSizes, iconTypes } from "./const";

type Props = {
  name: IconTypeKey;
  size?: IconSizeKey;
  color?: AllColorKey;
};

/**
 * Icon
 *
 * @param props - properties
 *
 * Required:
 * @param props.name - name of Icon
 *
 * Optional:
 * @param [props.size] - size of Icon
 * @param [props.color] - color of Icon
 */
const Icon = ({ size = "medium", color = "primary", name }: Props) => {
  const iconSize = iconSizes[size];
  const iconColor = allColors[color];
  const iconName = iconTypes[name];
  return <RNVIcon name={iconName} size={iconSize} color={iconColor} />;
};

export { Props };

export default Icon;
