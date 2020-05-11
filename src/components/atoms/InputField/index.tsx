import { inputFieldFactory, InputFieldProps } from "react-native-kinpaku-ui";
import { themes, additionalColors } from "../../../symbols";
import { inputFieldSizes } from "./const";

type Props = InputFieldProps<
  typeof additionalColors,
  typeof inputFieldSizes,
  false
>;

/**
 * InputField
 *
 * @param props - properties
 *
 * Required:
 * @param props.value - the value in the InputField
 *
 * Optional:
 * @param [props.autoFocus] - if the InputField should be auto-focused
 * @param [props.backgroundColor] - background color of the InputField
 * @param [props.borderColor] - border color of the InputField
 * @param [props.color] - the main color of the InputField
 * @param [props.defaultValue] - the default value of the InputField
 * @param [props.isDisabled] - if the InputField is disabled
 * @param [props.maxLength] - max length of the InputField
 * @param [props.onBlur] - function that runs on blur
 * @param [props.onChange] - function that runs on change
 * @param [props.onChangeText] - function that runs when Text change
 * @param [props.onEndEditing] - function that runs on end editing
 * @param [props.onFocus] - function that runs on focus
 * @param [props.onKeyPress] - function that runs on key press
 * @param [props.placeholder] - placeholder of the InputField
 * @param [props.size] - size of the input InputField
 * @param [props.shape] - type of the input InputField: "sharp" | "rounded" | "circular"
 * @param [props.textColor] - text color of the InputField
 */
const InputField = inputFieldFactory<
  typeof themes,
  typeof additionalColors,
  typeof inputFieldSizes,
  false
>({
  themes,
  additionalPalettes: additionalColors,
  sizes: inputFieldSizes,
});

export { Props };

export default InputField;
