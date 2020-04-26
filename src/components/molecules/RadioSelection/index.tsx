import React from "react";
import { TouchableOpacity } from "react-native";
import RadioButton from "../../atoms/RadioButton";
import { Label } from "../../atoms/Text";
import Space from "../../atoms/Space";
import { stylizeRadioSelection } from "./styles";

type Props = {
  active: boolean;
  children: string;
  color?: "primary" | "secondary" | "disabled";
  onPress: (arg: any) => any;
};

/**
 * Radio Selection
 *
 * @param {Props} props - props
 * @param props.active - radio button selected or not
 * @param props.children - text of selection
 * @param [props.color] - color of the button
 * @param [props.size] - size of the Button
 */
const RadioSelection: React.FC<Props> = (props: Props): React.ReactElement => {
  const { active, children, color = "primary", onPress } = props;
  const styles = stylizeRadioSelection();
  return (
    <TouchableOpacity style={styles.base} onPress={onPress}>
      <RadioButton active={active} color={color} onPress={onPress} />
      <Space.Queue size="small" />
      <TouchableOpacity onPress={onPress}>
        <Label color={color} size="large">
          {children}
        </Label>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RadioSelection;
