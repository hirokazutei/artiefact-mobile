import { TextVariationProps } from "react-native-kinpaku-ui";

type TextVariation = "ShiftingTitle";

const textVariation: {
  [textVariation in TextVariation]: TextVariationProps<null, null>
} = {
  ShiftingTitle: {
    fontWeight: "bold",
    defaultFontSize: 32,
    isBold: true,
    allowFontScaling: false,
  },
};
export { TextVariation, textVariation };
