import { radioButtonFactory } from "react-native-kinpaku-ui";
import { colors, themes } from "../../../symbols/colors";
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
const RadioButton = radioButtonFactory<
  typeof themes,
  typeof colors,
  null,
  false
>({
  themes,
  sizes: radioButtonSize,
  additionalPalettes: colors
});

export default RadioButton.Dot;
