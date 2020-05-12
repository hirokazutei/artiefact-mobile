import React from "react";
import { TouchableOpacity } from "react-native";
import RadioButton from "../../atoms/RadioButton";
import { Label } from "../../atoms/Text";
import Space from "../../atoms/Space";
import { stylizeRadioSelection } from "./styles";

type Props = {
  active: boolean;
  color?: "primary" | "secondary";
  isDisabled?: boolean;
  label: string;
  size?: "small" | "medium" | "large";
  onPress: (arg: any) => any;
};

/**
 * Radio Selection
 *
 * @param props - props
 *
 * Required:
 * @param props.active - radio button selected or not
 * @param props.children - text of selection
 *
 * Optional:
 * @param [props.color] - color of the button
 * @param [props.size] - size of the Button
 */
const RadioSelection: React.FC<Props> = (props: Props): React.ReactElement => {
  const { active, label, color = "primary", isDisabled, onPress, size } = props;
  const styles = stylizeRadioSelection();
  return (
    <TouchableOpacity
      style={styles.base}
      onPress={onPress}
      disabled={isDisabled}
    >
      <RadioButton
        active={active}
        color={color}
        onPress={onPress}
        isDisabled={isDisabled}
        size={size}
      />
      <Space.Queue size="small" />
      <TouchableOpacity onPress={onPress}>
        <Label color={isDisabled ? "disabled" : color} size={size}>
          {label}
        </Label>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export { Props };

export default RadioSelection;
