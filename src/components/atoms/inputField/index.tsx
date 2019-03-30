import React from "react";
import { TextInput } from "react-native";
import { stylizeInputField } from "./styles";
import { SettingProps, resolveKeyboardTypes } from "./settings";

export interface Props {
  defaultValue?: string;
  editable?: boolean;
  maxLength?: number;
  onChange?: (e: any) => any;
  onChangeValue?: (val: any) => any;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const InputField = (props: Props & SettingProps): React.ReactElement => {
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
