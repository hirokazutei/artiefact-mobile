import React from "react";
import RNVIcon from "react-native-vector-icons/Feather";
import { touchableFactory, TouchableProps } from "react-native-kinpaku-ui";
import { allColors, AllColorKeys, themes } from "../../../symbols";
import {
  touchablePaddingSizes,
  iconSizes,
  IconNames,
  iconNames
} from "./const";

const Touchable: React.FunctionComponent<TouchableProps<
  typeof allColors,
  typeof touchablePaddingSizes,
  false
>> = touchableFactory<
  typeof themes,
  typeof allColors,
  typeof touchablePaddingSizes,
  false
>({
  themes,
  sizes: touchablePaddingSizes,
  additionalPalettes: allColors
});

type UnusedProps = "align" | "children" | "isStretched";

type UsedTouchableProps = Omit<
  TouchableProps<typeof allColors, typeof touchablePaddingSizes, false>,
  UnusedProps
>;

export type Props = {
  color?: AllColorKeys;
  isDisabled?: boolean;
  name: IconNames;
  onPress: (arg: any) => void;
} & UsedTouchableProps;

const colorResolver = ({
  color,
  isSolidType,
  isDisabled
}: {
  color: AllColorKeys;
  isSolidType: boolean;
  isDisabled?: boolean;
}): { buttonColor: AllColorKeys; iconColor: string } => {
  if (!isSolidType) {
    return {
      buttonColor: "background",
      iconColor: isDisabled ? allColors.disabled : allColors[color]
    };
  } else if (isDisabled) {
    return { buttonColor: "disabled", iconColor: allColors.background };
  }
  return { buttonColor: color, iconColor: allColors.background };
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
