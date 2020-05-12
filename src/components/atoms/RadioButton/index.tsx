import { radioButtonFactory, RadioButtonProps } from "react-native-kinpaku-ui";
import { additionalColors, themes } from "../../../symbols";
import { radioButtonSizes } from "./const";

type Props = RadioButtonProps<
  typeof additionalColors,
  typeof radioButtonSizes,
  false
>;

/**
 * RadioButton
 *
 * @param props - properties
 *
 * Required:
 * @param props.active - if the radioButton is active
 * @param props.onPress - the onPress event of the button
 *
 * Optional
 * @param [props.color] - the color of the Icon
 * @param [props.isDisabled] - if the button is disabled
 * @param [props.size] - the size of Icon
 */
const { Circular, Round, Sharp } = radioButtonFactory<
  typeof themes,
  typeof additionalColors,
  typeof radioButtonSizes,
  false
>({
  themes,
  sizes: radioButtonSizes,
  additionalPalettes: additionalColors,
});

export { Props, Circular, Round, Sharp };

export default Round;
