import React from "react";
import RNVIcon from "react-native-vector-icons/Feather";
import { allColors, AllColorKey } from "../../../symbols";
import {
  touchablePaddingSizes,
  iconSizes,
  IconNameKey,
  iconNames,
} from "./const";
import Touchable, { Props as TouchableProps } from "../Touchable";

type UnusedProps = "align" | "children" | "isStretched";

type UsedTouchableProps = Omit<TouchableProps, UnusedProps>;

type IconButtonTypeKey = "fill" | "outline";

type Props = {
  name: IconNameKey;
  type?: IconButtonTypeKey;
} & UsedTouchableProps;

const colorResolver = ({
  color,
  isFillType,
  isDisabled,
}: {
  color: AllColorKey;
  isFillType: boolean;
  isDisabled?: boolean;
}): { buttonColor: AllColorKey; iconColor: string } => {
  if (!isFillType) {
    return {
      buttonColor: "background",
      iconColor: isDisabled ? allColors.disabled : allColors[color],
    };
  } else if (isDisabled) {
    return { buttonColor: "disabled", iconColor: allColors.background };
  }
  return { buttonColor: color, iconColor: allColors.background };
};

/**
 * IconButton
 *
 * @param props - properties
 *
 * Required:
 * @param props.name - the name of Icon type
 * @param props.onPress - the onPress event of the button
 *
 * Optional
 * @param [props.color] - the color of the Icon
 * @param [props.isDisabled] - if the button is disabled
 * @param [props.size] - the size of Icon
 * @param [props.type] - solid | outline button type
 */
const IconButton = ({
  size = "default",
  color = "primary",
  isDisabled,
  name,
  type = "fill",
  ...props
}: Props) => {
  const isFillType = type === "fill";
  const iconSize = iconSizes[size as keyof typeof touchablePaddingSizes];
  const { buttonColor, iconColor } = colorResolver({
    color,
    isFillType,
    isDisabled,
  });
  const iconName = iconNames[name];
  const touchableType = isFillType ? "fill" : "outline";
  return (
    <Touchable.Circular
      color={buttonColor}
      size={size}
      type={touchableType}
      {...props}
    >
      <RNVIcon name={iconName} size={iconSize} color={iconColor} />
    </Touchable.Circular>
  );
};

export { Props, IconButtonTypeKey };

export default IconButton;
