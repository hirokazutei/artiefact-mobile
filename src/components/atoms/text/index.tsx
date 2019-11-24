import { textFactory } from "react-native-kinpaku-ui";
import { textVariations, FontSizes } from "./const";
import { themes, colors } from "../../../symbols/colors";

/**
 * Text
 *
 * Required:
 * @param props - properties
 * @param props.children - the text being displayed
 *
 * Optional
 * @param [props.align] - how the text is aligned
 * @param [props.bold] - if the text is bold
 * @param [props.color] - the color of the text
 * @param [props.italic] - if the text is italicized or not
 * @param [props.size] - the size of text
 * @param [props.lineThrough] - if the text has lineThrough
 * @param [props.bold] - if the text is underlined
 */
const { Title, Heading, SubHeading, Body, Caption, Quote } = textFactory<
  typeof themes,
  typeof colors,
  typeof textVariations,
  FontSizes,
  true
>({
  themes,
  defaultFontSizeKey: "medium",
  textVariations
});

export { Title, Heading, SubHeading, Body, Caption, Quote };
