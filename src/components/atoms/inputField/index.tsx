import { inputFieldFactory, InputFieldProps } from "react-native-kinpaku-ui";
import { themes, allColors } from "../../../symbols";

export type Props = InputFieldProps<typeof allColors, null>;

/*
- InputField
-
- Required:
- @param props - properties
- @param props.value - the value in the inputField
-
- Optional:
- @param [props.autoFocus] - if the field should be auto-focused
- @param [props.backgroundColor] - background color of the field
- @param [props.borderColor] - border color of the field
- @param [props.defaultValue] - the default value of the field
- @param [props.isDisabled] - if the input field is disabled
- @param [props.maxLength] - max length of the field
- @param [props.onBlur] - function that runs on blur
- @param [props.onChange] - function that runs on change
- @param [props.onEndEditing] - function that runs on end editing
- @param [props.onFocus] - function that runs on focus
- @param [props.onKeyPress] - function that runs on key press
- @param [props.placeholder] - placeholder of the input field
- @param [props.size] - size of the input field
- @param [props.shape] - type of the input field: "sharp" | "rounded" | "circular"
- @param [props.textColor] - text color of the field
*/
const InputField = inputFieldFactory<typeof themes, typeof allColors, null>({
  themes,
  additionalPalettes: allColors
});

export default InputField;
