import React from "react";
import {
  radioButtonFactory,
  RadioButtonProps,
  RadioButtonVariations
} from "react-native-kinpaku-ui";
import { colors } from "../../../symbols/colors";
import { themes } from "../../../symbols/colors";
import { radioButtonSize } from "./const";

/**
 * RadioButton
 *
 * Required:
 * @param props - properties
 * @param props.active - if the radioButton is active
 * @param props.onPress - the onPress event of the button
 *
 * Optional
 * @param [props.color] - the color of the Icon
 * @param [props.isDisabled] - if the button is disabled
 * @param [props.size] - the size of Icon
 */
const RadioButton: {
  [key in RadioButtonVariations]: React.FunctionComponent<
    RadioButtonProps<typeof colors, null, false>
  >;
} = radioButtonFactory<typeof themes, typeof colors, null>({
  themes,
  sizes: radioButtonSize,
  additionalPalettes: colors
});

export default RadioButton.Dot;
