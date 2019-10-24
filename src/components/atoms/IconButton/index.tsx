import React from "react";
import RNVIcon from "react-native-vector-icons/Feather";
import { touchableFactory, TouchableProps } from "react-native-kinpaku-ui";
import { colors, ColorTypeKeys } from "../../../symbols/colors";
import { themes } from "../../../symbols/colors";
import {
  touchablePaddingSizes,
  iconSizes,
  IconTypes,
  iconTypes
} from "./const";

const Touchable: React.FunctionComponent<
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

type UnusedProps =
  | "additionalProps"
  | "additionalStyle"
  | "aslign"
  | "children"
  | "isStretched";

type UsedTouchableProps = Omit<
  TouchableProps<ColorTypeKeys, typeof touchablePaddingSizes>,
  UnusedProps
>;

type Props = {
  color?: ColorTypeKeys;
  isDisabled?: boolean;
  name: IconTypes;
  onPress: (arg: any) => void;
} & UsedTouchableProps;

/**
 * IconButton
 *
 * Required:
 * @param props - properties
 * @param props.name - the name of Icon type
 * @param props.onPress - the onPress event of the button
 *
 * Optional
 * @param [props.size] - the size of Icon
 * @param [props.isDisabled] - if the button is disabled
 * @param [props.type] - filled or bordered button type
 */
const IconButton: React.FC<Props> = ({
  size = "default",
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
  const iconName = iconTypes[name];
  return (
    <Touchable color={color} size={size} {...props}>
      <RNVIcon name={iconName} size={iconSize} color={ioconColor} />
    </Touchable>
  );
};

export default IconButton;
