import React from "react";
import RNVIcon from "react-native-vector-icons/Feather";
import {
  touchableFactory,
  TouchableAllPaddingProps
} from "react-native-kinpaku-ui";
import { colors, ColorTypeKeys } from "../../../symbols/colors";
import { themes } from "../../../symbols/colors";

type touchablePaddingKeys = "small" | "medium" | "large";

export const touchablePaddingSizes: Readonly<
  { [key in touchablePaddingKeys | "default"]: TouchableAllPaddingProps }
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
  null,
  typeof touchablePaddingSizes
>({ themes, touchablePaddingSizes });

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

export type IconSizeKeys =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive"
  | "macro";

const iconSize: Readonly<{ [key in IconSizeKeys]: number }> = {
  tiny: 12,
  small: 16,
  medium: 24,
  large: 32,
  huge: 56,
  massive: 72,
  macro: 104
};

type Props = {
  name: IconTypes;
  size: IconSizeKeys;
  color: ColorTypeKeys;
};

/**
 * Icon
 *
 * @param props - properties
 * @param props.name - name of Icon
 * @param props.size - size of Icon
 */
const Icon: React.FC<Props> = (props: Props): React.ReactElement => {
  const size = iconSize[props.size];
  const color = colors[props.color];
  const name = IconType[props.name];
  return <RNVIcon name={name} size={size} color={color} />;
};

/*
color = 'primary',
      size = 'default',
      children,
      isDisabled = false,
      isStretched,
      align = DEFAULT_TOUCHABLE_ALIGN,
      onPress,
      type = defaultTouchableType,
      additionalProps,
      additionalStyle,
      */

export const Test = () => {
  return (
    <Touchable.Filled size="medium">
      <Icon name={"camera"} color={"background"} size={"medium"} />
    </Touchable.Filled>
  );
};

export default Icon;
