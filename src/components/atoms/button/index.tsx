import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { stylizeButton, StyleProps } from "./styles";

export type Props = {
  children?: never;
  label: string;
  onPress: (args: any) => any;
  isDisabled?: boolean;
  isStretched?: boolean;
} & StyleProps;

/**
 * Button
 *
 * @param props - props
 * @param props.label - label
 * @param [props.onPress] - action fired on press
 * @param [props.isDiabled] - is button disabled
 * @param [props.isStretched] - is button stretched
 * Style
 * @param [props.color] - color of the button
 * @param [props.size] - size of the Button
 */
const Button: React.FC<Props> = (props: Props): React.ReactElement => {
  const { label, isDisabled, isStretched, ...styleProps } = props;
  const styles = stylizeButton(styleProps);
  const extraStyles = [
    isDisabled ? styles.buttonDisabled : null,
    isStretched ? styles.buttonStretched : null
  ];
  return (
    <TouchableOpacity
      style={[styles.button, ...extraStyles]}
      disabled={isDisabled}
      onPress={props.onPress}
      accessibilityLabel={label}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
