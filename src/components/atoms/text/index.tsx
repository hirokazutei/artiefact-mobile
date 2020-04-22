import { textFactory, TextProps as UITextProps } from "react-native-kinpaku-ui";
import { themes, additionalColors } from "../../../symbols";
import { textVariations, FontSizeKey } from "./const";

type TextProps = UITextProps<typeof additionalColors, FontSizeKey, true, false>;

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
const { Title, Heading, SubHeading, Body, Label, Quote } = textFactory<
  typeof themes,
  typeof additionalColors,
  typeof textVariations,
  FontSizeKey,
  true,
  false
>({
  themes,
  additionalPalettes: additionalColors,
  textVariation: textVariations,
  defaultFontSizeKey: "medium",
});

export { TextProps, Title, Heading, SubHeading, Body, Label, Quote };

export default { Title, Heading, SubHeading, Body, Label, Quote };
