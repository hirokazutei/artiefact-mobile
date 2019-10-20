import {
  buttonFactory,
  ButtonProps,
  ButtonShapeOptions
} from "react-native-kinpaku-ui";
import { themes, colors } from "../../../symbols/colors";
import { buttonSizes } from "./const";

/**
 * Button
 *
 * Required:
 * @param title - title label of the button
 * @param onPress - the onPress event of the button
 *
 * Optional Props:
 * @param ['align'] - flex alignment of the label inside
 * @param ['color'] - color of the button
 * @param ['isDisabled'] - if the button is disabled or not
 * @param ['isStretched'] - if the button spans the entire horizontal space
 * @param ['size'] - size of the button, default is medium.
 * @param ['type'] - type of button: solid | clear | outline
 *
 * Other:
 * @param ['additionalButtonProps'] - overriding TouchableOpacity props
 * @param ['additionalButtonStyle'] - overriding TouchableOpacity style
 * @param ['additionalTextProps'] - overriding Text props
 * @param ['additionalTextStyle'] - overriding Text style
 */
const Button: {
  [buttonShape in ButtonShapeOptions]: React.FunctionComponent<
    ButtonProps<typeof colors, typeof buttonSizes>
  >;
} = buttonFactory<typeof themes, typeof colors, typeof buttonSizes>({
  themes,
  additionalPalettes: colors,
  buttonSizes
});

export const { Circular, Round, Sharp } = Button;

export default Button.Circular;
