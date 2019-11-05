import {
  buttonFactory,
  ButtonProps as UIButtonProps,
  ButtonVariations
} from "react-native-kinpaku-ui";
import { themes, colors } from "../../../symbols/colors";
import { buttonSizes } from "./const";

type UnusedProps = "align";

export type ButtonProps = Omit<
  UIButtonProps<typeof colors, typeof buttonSizes, false>,
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
const Button: {
  [buttonShape in ButtonVariations]: React.FunctionComponent<ButtonProps>;
} = buttonFactory<typeof themes, typeof colors, typeof buttonSizes>({
  themes,
  additionalPalettes: colors,
  sizes: buttonSizes,
  defaultType: "solid"
});

export const { Circular, Round, Sharp } = Button;

export default Button.Circular;
