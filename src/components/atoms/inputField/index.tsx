import React from "react";
import { TextInput } from "react-native";
import { StyleProps, stylizeInputField } from "./styles";
import {
  SettingProps,
  resolveKeyboardTypes,
  resolveAutoCapitalize
} from "./settings";

type Props = {
  children?: never;
  defaultValue?: string;
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
 * @param [props.editable] - is field editable
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
    isDisabled,
    isErrornous,
    ...otherProps
  } = props;
  const styles = stylizeInputField({ color, size, isDisabled, isErrornous });
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
