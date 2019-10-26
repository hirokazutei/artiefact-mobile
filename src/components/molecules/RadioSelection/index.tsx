import React from "react";
import { TouchableOpacity } from "react-native";
import RadioButton from "../../atoms/RadioButton";
import Text from "../../atoms/Text";
import Space from "../../atoms/Space";
import { stylizeRadioSelection } from "./styles";

type Props = {
  checked: boolean;
  children: string;
  color?: "primary" | "secondary" | "disabled";
  onPress?: (arg: any) => any;
};

/**
 * Radio Selection
 *
 * @param {Props} props - props
 * @param props.checked - buttonchecked
 * @param props.children - text of selection
 * @param [props.color] - color of the button
 * @param [props.size] - size of the Button
 */
const RadioSelection: React.FC<Props> = (props: Props): React.ReactElement => {
  const { checked, children, color = "primary", onPress } = props;
  const styles = stylizeRadioSelection();
  return (
    <TouchableOpacity style={styles.base} onPress={onPress}>
      <RadioButton checked={checked} color={color} onPress={onPress} />
      <Space.Queue size="small" />
      <Text color={color} size="huge" onPress={onPress}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioSelection;
