import React from "react";
import { TextInput } from "react-native";
import { StyleProps, stylizeInputField } from "./styles";
import {
  SettingProps,
  resolveKeyboardTypes,
  resolveAutoCapitalize
} from "./settings";

export type Props = {
  children?: never;
  defaultValue?: string;
  disableLine?: boolean;
  editable?: boolean;
  maxLength?: number;
  onChangeText?: (e: any) => any;
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string;
  isDisabled?: boolean;
  isErrornous?: boolean;
} & SettingProps &
  StyleProps;

/**
 * Input Field
 *
 * @param props - properties
 * @param [props.defaultValue] - default value
 * @param [props.disableLine] - disable line to be used in another component
 * @param [props.editable] - is field editable
 * @param [props.isDisabled] - if the input field is disabled
 * @param [props.isErrornous] -if the input field contains an error
 * @param [props.maxLength] - max length of field
 * @param [props.onChangeText] - action fired when change occures
 * @param [props.placeholder] - placeholder of the field
 * @param [props.secureTextEntry] - if it is secure text entry
 * @param [props.value] - value of input
 * Settings
 * @param [props.autoCapitalize] - which characters to auto capitalize
 * @param [props.keyboardType] - the keyboard type of field
 */
const InputField: React.FC<Props> = (props: Props): React.ReactElement => {
  const {
    keyboardType,
    autoCapitalize,
    color,
    size,
    disableLine,
    isDisabled,
    isErrornous,
    ...otherProps
  } = props;
  const styles = stylizeInputField({
    color,
    size,
    isDisabled,
    disableLine,
    isErrornous
  });

  return (
    <TextInput
      style={styles.inputField}
      keyboardType={resolveKeyboardTypes(keyboardType)}
      autoCapitalize={resolveAutoCapitalize(autoCapitalize)}
      {...otherProps}
    />
  );
};

export default InputField;
