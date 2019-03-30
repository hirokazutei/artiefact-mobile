import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { stylizeButton, StyleProps } from "./styles";

export interface Props {
  children: string;
  onPress?: () => any;
  isDisabled?: boolean;
  isStretched?: boolean;
}

const Button = (props: Props & StyleProps): React.ReactElement => {
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
