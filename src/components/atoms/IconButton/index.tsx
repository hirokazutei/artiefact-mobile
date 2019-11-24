import React from "react";
import RNVIcon from "react-native-vector-icons/Feather";
import { touchableFactory, TouchableProps } from "react-native-kinpaku-ui";
import { colors, ColorTypeKeys } from "../../../symbols/colors";
import { themes } from "../../../symbols/colors";
import {
  touchablePaddingSizes,
  iconSizes,
  IconNames,
  iconNames
} from "./const";

const Touchable: React.FunctionComponent<TouchableProps<
  typeof colors,
  typeof touchablePaddingSizes,
  false
>> = touchableFactory<
  typeof themes,
  typeof colors,
  typeof touchablePaddingSizes,
  false
>({
  themes,
  sizes: touchablePaddingSizes,
  additionalPalettes: colors
});

type UnusedProps = "align" | "children" | "isStretched";

type UsedTouchableProps = Omit<
  TouchableProps<typeof colors, typeof touchablePaddingSizes, false>,
  UnusedProps
>;

export type Props = {
  color?: ColorTypeKeys;
  isDisabled?: boolean;
  name: IconNames;
  onPress: (arg: any) => void;
} & UsedTouchableProps;

const colorResolver = ({
  color,
  isSolidType,
  isDisabled
}: {
  color: ColorTypeKeys;
  isSolidType: boolean;
  isDisabled?: boolean;
}): { buttonColor: ColorTypeKeys; iconColor: string } => {
  if (!isSolidType) {
    return {
      buttonColor: "background",
      iconColor: isDisabled ? colors.disabled : colors[color]
    };
  } else if (isDisabled) {
    return { buttonColor: "disabled", iconColor: colors.background };
  }
  return { buttonColor: color, iconColor: colors.background };
};

/**
 * IconButton
 *
 * Required:
 * @param props - properties
 * @param props.name - the name of Icon type
 * @param props.onPress - the onPress event of the button
 *
 * Optional
 * @param [props.color] - the color of the Icon
 * @param [props.isDisabled] - if the button is disabled
 * @param [props.size] - the size of Icon
 * @param [props.type] - solid | outline button type
 */
const IconButton: React.FC<Props> = ({
  size = "default",
  color = "primary",
  isDisabled,
  name,
  type = "solid",
  ...props
}: Props): React.ReactElement => {
  const isSolidType = type === "solid";
  const iconSize = iconSizes[size as keyof typeof touchablePaddingSizes];
  const { buttonColor, iconColor } = colorResolver({
    color,
    isSolidType,
    isDisabled
  });
  const iconName = iconNames[name];
  // FIXME: It is better if the icons took the same color parameters instead of hex strings
  return (
    <Touchable color={buttonColor} size={size} {...props}>
      <RNVIcon name={iconName} size={iconSize} color={iconColor} />
    </Touchable>
  );
};

export default IconButton;
