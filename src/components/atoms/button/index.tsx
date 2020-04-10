import {
  buttonFactory,
  ButtonProps as UIButtonProps
} from "react-native-kinpaku-ui";
import { themes, allColors } from "../../../symbols";
import { buttonSizes } from "./const";

type UnusedProps = "align";

export type ButtonProps = Omit<
  UIButtonProps<typeof allColors, typeof buttonSizes, false>,
  UnusedProps
>;

/**
 * Button
 *
 * Required:
 * @param props - properties
 * @param props.title - title label of the button
 * @param props.onPress - onPress event of the button
 *
 * Optional:
 * @param [props.color] - color of the button
 * @param [props.isDisabled] - if the button is disabled or not
 * @param [props.isStretched] - if the button spans the entire horizontal space
 * @param [props.size] - size of the button, default is medium.
 * @param [props.type] - type of button: solid | clear | outline
 */
const Button = buttonFactory<
  typeof themes,
  typeof allColors,
  typeof buttonSizes,
  false
>({
  themes,
  additionalPalettes: allColors,
  sizes: buttonSizes,
  defaultType: "solid"
});

export const { Circular, Round, Sharp } = Button;

export default Button.Circular;
