import React from "react";
import { TouchableOpacity } from "react-native";
import RadioButton from "../../atoms/RadioButton";
import Text from "../../atoms/Text";
import { stylizeRadioSelection } from "./styles";
import Outset from "../../atoms/Outset/index";

type Props = {
  checked: boolean;
  children: string;
  color?: "primary" | "secondary" | "disabled";
  onPress?: (arg: any) => any;
};

/**
 * Radio Selection
 *
 * @param props - props
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
      <Outset marginRight="small">
        <RadioButton checked={checked} color={color} onPress={onPress} />
      </Outset>
      <Text color={color} size="huge">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioSelection;
