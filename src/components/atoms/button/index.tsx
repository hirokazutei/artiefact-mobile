import {
  buttonFactory,
  ButtonProps as UIButtonProps,
} from "react-native-kinpaku-ui";
import { themes, additionalColors } from "../../../symbols";
import { buttonSizes } from "./const";

type UnusedProps = "align";

type ButtonProps = Omit<
  UIButtonProps<typeof additionalColors, typeof buttonSizes, false>,
  UnusedProps
>;

/**
 * Button
 *
 * @param props - properties
 *
 * Required:
 * @param props.label - label of the Button
 * @param props.onPress - onPress event of the Button
 *
 * Optional:
 * @param [props.align] - the alignment of the text
 * @param [props.color] - color of the Button
 * @param [props.isDisabled] - if the Button is disabled or not
 * @param [props.isStretched] - if the Button spans the entire horizontal space
 * @param [props.size] - size of the Button
 * @param [props.type] - type of Button: solid | clear | outline
 *
 * Optional Additional Args:
 * @param [_customButtonProps] - additional props for the TouchableOpacity component
 * @param [_customButtonStyle] - additional styles for the TouchableOpacity component
 * @param [_customTextProps] - additional props for the Text component
 * @param [_customTextProps] - additional styles for the Text component
 */
const Button = buttonFactory<
  typeof themes,
  typeof additionalColors,
  typeof buttonSizes,
  false
>({
  themes,
  additionalPalettes: additionalColors,
  sizes: buttonSizes,
});

const { Circular, Round, Sharp } = Button;

export { ButtonProps, Circular, Round, Sharp };

export default Button.Circular;
