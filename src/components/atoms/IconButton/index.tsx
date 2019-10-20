import React from "react";
import RNVIcon from "react-native-vector-icons/Feather";
import {
  touchableFactory,
  TouchableAllPaddingProps,
  TouchableProps
} from "react-native-kinpaku-ui";
import { colors, ColorTypeKeys } from "../../../symbols/colors";
import { themes } from "../../../symbols/colors";
import {
  touchablePaddingSizes,
  iconSizes,
  IconTypes,
  iconTypes
} from "./constants";

export const Touchable: React.FunctionComponent<
  TouchableProps<typeof colors, typeof touchablePaddingSizes>
> = touchableFactory<
  typeof themes,
  typeof colors,
  typeof touchablePaddingSizes
>({
  themes,
  touchablePaddingSizes,
  additionalPalettes: colors
});

type Props = {
  children: never;
  name: IconTypes;
  color?: ColorTypeKeys;
} & TouchableProps<ColorTypeKeys, typeof touchablePaddingSizes>;

/**
 * IconButton
 *
 * @param props - properties
 * @param props.name - name of Icon
 * @param props.size - size of Icon
 * @param props.type - type of Icon
 * @param props.isDisabled -
 * @param props.isStreched -
 * @param props.type -
 * @param props.onPress -
 */
const IconButton: React.FC<Props> = ({
  size,
  color = "primary",
  isDisabled,
  name,
  type = "filled",
  ...props
}: Props): React.ReactElement => {
  const isFilledType = type === "filled";
  const iconSize = iconSizes[size as keyof typeof touchablePaddingSizes];
  const ioconColor =
    isFilledType || isDisabled ? colors["background"] : colors[color];
  const iconName = IconType[name];
  return (
    <Touchable color={color} size={size} {...props}>
      <RNVIcon name={iconName} size={iconSize} color={ioconColor} />
    </Touchable>
  );
};

export default IconButton;
