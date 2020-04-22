import { TextVariationProps } from "react-native-kinpaku-ui";

type TextVariationKey =
  | "Title"
  | "Heading"
  | "SubHeading"
  | "Body"
  | "Label"
  | "Quote";

type FontSizeKey = "small" | "medium" | "large";

const textVariations: {
  [textVariation in TextVariationKey]: TextVariationProps<FontSizeKey, null>
} = {
  Title: {
    fontWeight: "bold",
    fontSize: {
      small: 28,
      medium: 32,
      large: 36,
    },
  },
  Heading: {
    fontWeight: "bold",
    fontSize: {
      small: 24,
      medium: 28,
      large: 32,
    },
  },
  SubHeading: {
    fontWeight: "bold",
    fontSize: {
      small: 20,
      medium: 24,
      large: 28,
    },
  },
  Body: {
    fontSize: {
      small: 14,
      medium: 16,
      large: 18,
    },
  },
  Label: {
    fontSize: {
      small: 12,
      medium: 14,
      large: 16,
    },
  },
  Quote: {
    fontSize: {
      small: 14,
      medium: 16,
      large: 18,
    },
    isItalic: true,
  },
};
export { FontSizeKey, TextVariationKey, textVariations };
