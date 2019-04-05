import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { stylizeButton, StyleProps } from "./styles";

type Props = {
  children: string;
  onPress?: () => any;
  isDisabled?: boolean;
  isStretched?: boolean;
} & StyleProps;

/**
 * Button
 *
 * @param props - props
 * @param props.children - children
 * @param [props.onPress] - action fired on press
 * @param [props.isDiabled] - is button disabled
 * @param [props.isStretched] - is button stretched
 * Style
 * @param [props.color] - color of the button
 * @param [props.size] - size of the Button
 */
const Button: React.FC<Props> = (props: Props): React.ReactElement => {
  const { children, isDisabled, isStretched, ...styleProps } = props;
  const styles = stylizeButton(styleProps);
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isDisabled && styles.buttonDisabled,
        isStretched && styles.buttonStretched
      ]}
      onPress={props.onPress}
      accessibilityLabel={children}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
