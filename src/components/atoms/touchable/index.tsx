import {
  touchableFactory,
  TouchableProps as UITouchableProps,
} from "react-native-kinpaku-ui";
import { themes, additionalColors } from "../../../symbols";
import { touchableSizes } from "./const";

type UnusedProps = "align";

type TouchableProps = Omit<
  UITouchableProps<typeof additionalColors, typeof touchableSizes, false>,
  UnusedProps
>;

/**
 * Touchable
 *
 * @param props - properties
 *
 * Required:
 * @param props.children - the children of the touchable
 * @param props.onPress - onPress event of the Touchable
 *
 * Optional:
 * @param [props.align] - the alignment of the text
 * @param [props.color] - color of the Touchable
 * @param [props.isDisabled] - if the Touchable is disabled or not
 * @param [props.isStretched] - if the Touchable spans the entire horizontal space
 * @param [props.size] - size of the Touchable
 *
 * Optional Additional Args:
 * @param [_customProps] - additional props for the TouchableOpacity component
 * @param [_customStyle] - additional styles for the TouchableOpacity component
 */
const Touchable = touchableFactory<
  typeof themes,
  typeof additionalColors,
  typeof touchableSizes,
  false
>({
  themes,
  additionalPalettes: additionalColors,
  sizes: touchableSizes,
});

export { TouchableProps };

export default Touchable;
