import { checkBoxFactory, CheckBoxProps } from "react-native-kinpaku-ui";
import { themes, additionalColors } from "../../../symbols";
import { checkBoxSizes } from "./const";

type Props = CheckBoxProps<
  typeof additionalColors,
  typeof checkBoxSizes,
  false
>;

/**
 * CheckBox
 *
 * @param props - properties
 *
 * Required:
 * @param props.onPress - onPress event of the CheckBox
 *
 * Optional:
 * @param [props.active] - if the CheckBox is active or not
 * @param [props.color] - color of the CheckBox
 * @param [props.isDisabled] - if the CheckBox is disabled or not
 * @param [props.size] - size of the CheckBox
 * @param [props.type] - type of CheckBox: solid | clear | outline
 */
const CheckBox = checkBoxFactory<
  typeof themes,
  typeof additionalColors,
  typeof checkBoxSizes,
  false
>({
  themes,
  additionalPalettes: additionalColors,
  sizes: checkBoxSizes,
});

const { Circular, Round, Sharp } = CheckBox;

export { Props, Circular, Round, Sharp };

export default Circular;
