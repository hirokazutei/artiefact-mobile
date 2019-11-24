import { TextVariationProps } from "react-native-kinpaku-ui";

type TextVariations =
  | "Title"
  | "Heading"
  | "SubHeading"
  | "Body"
  | "Caption"
  | "Quote";
type FontSizes = "small" | "medium" | "large";

const textVariations: {
  [textVariation in TextVariations]: TextVariationProps<FontSizes, null>;
} = {
  Title: {
    fontWeight: "bold",
    fontSizes: {
      small: 28,
      medium: 32,
      large: 36
    }
  },
  Heading: {
    fontWeight: "bold",
    fontSizes: {
      small: 24,
      medium: 28,
      large: 32
    }
  },
  SubHeading: {
    fontWeight: "bold",
    fontSizes: {
      small: 20,
      medium: 24,
      large: 28
    }
  },
  Body: {
    fontSizes: {
      small: 14,
      medium: 16,
      large: 18
    }
  },
  Caption: {
    fontSizes: {
      small: 12,
      medium: 14,
      large: 16
    }
  },
  Quote: {
    fontSizes: {
      small: 14,
      medium: 16,
      large: 18
    },
    isItalic: true
  }
};
export { FontSizes, TextVariations, textVariations };
