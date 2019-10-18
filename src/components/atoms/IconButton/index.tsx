import React from "react";
import RNVIcon from "react-native-vector-icons/Feather";
import {
  touchableFactory,
  TouchableAllPaddingProps,
  TouchableProps
} from "react-native-kinpaku-ui";
import { colors, ColorTypeKeys } from "../../../symbols/colors";
import { themes } from "../../../symbols/colors";

type IconSizeKeys = "small" | "medium" | "large";

export const touchablePaddingSizes: Readonly<
  { [key in IconSizeKeys | "default"]: TouchableAllPaddingProps }
> = {
  small: {
    padding: 4,
    borderRadius: 12
  },
  medium: {
    padding: 8,
    borderRadius: 24
  },
  large: {
    padding: 12,
    borderRadius: 36
  },
  default: { padding: 4, borderRadius: 8 }
};

export const Touchable = touchableFactory<
  typeof themes,
  ColorTypeKeys,
  IconSizeKeys
>({ themes, touchablePaddingSizes });

const iconSizes: Readonly<{ [key in IconSizeKeys | "default"]: number }> = {
  small: 16,
  medium: 24,
  large: 32,
  default: 16
};

export type IconTypes =
  | "camera"
  | "errorCircle"
  | "noConnection"
  | "successCircle"
  | "warningCircle";

type FeatherIconNames =
  | "camera"
  | "check-circle"
  | "x-circle"
  | "alert-circle"
  | "wifi-off";

const IconType: Readonly<{ [key in IconTypes]: FeatherIconNames }> = {
  camera: "camera",
  successCircle: "check-circle",
  errorCircle: "x-circle",
  warningCircle: "alert-circle",
  noConnection: "wifi-off"
};

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
