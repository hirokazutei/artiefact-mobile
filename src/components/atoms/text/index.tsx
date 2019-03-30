import React from "react";
import { Text } from "react-native";
import { stylizeText, StyleProps } from "./styles";

interface Props {
  onPress: (arg: any) => any;
  allowScaling?: boolean;
}

const InputField = (props: Props & StyleProps): React.ReactElement => {
  const { onPress, allowScaling, ...styleProps } = props;
  const styles = stylizeText(styleProps);
  return (
    <Text
      style={styles.text}
      onPress={onPress}
      allowFontScaling={allowScaling}
    />
  );
};

export default InputField;
