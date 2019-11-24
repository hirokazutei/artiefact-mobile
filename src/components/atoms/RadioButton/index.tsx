import { radioButtonFactory } from "react-native-kinpaku-ui";
import { allColors, themes } from "../../../symbols";
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
  typeof allColors,
  null,
  false
>({
  themes,
  sizes: radioButtonSize,
  additionalPalettes: allColors
});

export default RadioButton.Dot;
