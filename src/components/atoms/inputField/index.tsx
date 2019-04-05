import React from "react";
import { TextInput } from "react-native";
import { stylizeInputField } from "./styles";
import { SettingProps, resolveKeyboardTypes } from "./settings";

type Props = {
  defaultValue?: string;
  editable?: boolean;
  maxLength?: number;
  onChange?: (e: any) => any;
  onChangeValue?: (val: any) => any;
  placeholder?: string;
  secureTextEntry?: boolean;
} & SettingProps;

/**
 * Input Field
 * @param props - properties
 * @param [props.defaultValue] - default value
 * @param [props.editable] - is field editable
 * @param [props.maxLength - max length of field
 * @param [props.onChange] - action fired when change occures
 * @param [props.onChangeValue] - action fired when value change occures
 * @param [props.placeholder] - placeholder of the field
 * @param [props.secureTextEntry] - if it is secure text entry
 * Settings
 * @param [props.keyboardType] - the keyboard type of field
 */
const InputField: React.FC<Props> = (props: Props): React.ReactElement => {
  const { keyboardType, ...otherProps } = props;
  const styles = stylizeInputField();
  return (
    <TextInput
      style={styles.inputField}
      keyboardType={resolveKeyboardTypes(keyboardType)}
      {...otherProps}
    />
  );
};

export default InputField;
