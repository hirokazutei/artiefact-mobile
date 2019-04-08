import React from "react";
import { TouchableOpacity, View } from "react-native";
import { stylizeRadioButton, StyleProps } from "./styles";

type Props = {
  checked: boolean;
  children?: never;
  onPress?: () => any;
} & StyleProps;

/**
 * Radio Button
 *
 * @param props - props
 * @param checked - buttonchecked
 * @param [props.onPress] - action fired on press
 * Style
 * @param [props.color] - color of the button
 * @param [props.size] - size of the Button
 */
const RadioButton: React.FC<Props> = (props: Props): React.ReactElement => {
  const { onPress, checked, ...styleProps } = props;
  const styles = stylizeRadioButton(styleProps);
  return (
    <TouchableOpacity style={styles.radioButton} onPress={props.onPress}>
      <View style={[checked && styles.checked]} />
    </TouchableOpacity>
  );
};

export default RadioButton;
