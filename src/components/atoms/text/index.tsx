import React from "react";
import { Text as RNText } from "react-native";
import { stylizeText, StyleProps } from "./styles";

interface Props {
  children: string;
  onPress?: (arg: any) => any;
  allowScaling?: boolean;
}

/**
 * Text
 *
 * @param props - properties
 * @param [props.onPress] - action fired on press
 * @param [props.allowScaling] - allow font scaling
 * styles
 * @param [props.color] - color of text
 * @param [props.size] - size of text
 * @param [props.italic] - is text italic
 * @param [props.weight] - weight of text
 * @param [props.align] - alignment of text
 */
const Text = (props: Props & StyleProps): React.ReactElement => {
  const { children, onPress, allowScaling, ...styleProps } = props;
  const styles = stylizeText(styleProps);
  return (
    <RNText
      style={styles.text}
      onPress={onPress}
      allowFontScaling={allowScaling}
    >
      {children}
    </RNText>
  );
};

export default Text;
