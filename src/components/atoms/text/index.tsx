import React from "react";
import { Text as RNText, TouchableOpacity } from "react-native";
import { stylizeText, StyleProps } from "./styles";

type Props = {
  allowScaling?: boolean;
  children: string;
  onPress?: (arg: any) => any;
} & StyleProps;

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
const Text: React.FC<Props> = (props: Props): React.ReactElement => {
  const { children, onPress, allowScaling, ...styleProps } = props;
  const styles = stylizeText(styleProps);
  return (
    <TouchableOpacity onPress={onPress}>
      <RNText style={styles.text} allowFontScaling={allowScaling}>
        {children}
      </RNText>
    </TouchableOpacity>
  );
};

export default Text;
