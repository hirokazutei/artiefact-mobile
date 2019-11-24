import { Themes, ThemePalette } from "react-native-kinpaku-ui";

const mainThemeColors: ThemePalette = {
  primary: "#ff9345",
  secondary: "#008148",
  tertiary: "#034732",
  disabled: "#808080",
  background: "#EEEEEE",
  text: "#2d2832"
};

type ThemeKeys = "main";

type ThemePalettes = { [key in ThemeKeys]: ThemePalette };

const themes: Themes<ThemePalettes> = {
  default: mainThemeColors,
  main: mainThemeColors
};

type AdditionalColorKeys = "danger" | "faded";

const additionalColors: { [key in AdditionalColorKeys]: string } = {
  danger: "#ff2323",
  faded: "#b4afbe"
};

const allColors = {
  ...additionalColors,
  ...mainThemeColors
};

type AllColorKeys = keyof typeof allColors;

// Text
type TextColorKeys =
  | keyof Omit<ThemePalette, "background">
  | AdditionalColorKeys;

export {
  additionalColors,
  AllColorKeys,
  allColors,
  mainThemeColors,
  TextColorKeys,
  themes
};
