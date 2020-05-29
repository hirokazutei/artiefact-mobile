import { Themes, ThemePalette } from "react-native-kinpaku-ui";

const mainThemeColors: ThemePalette = {
  primary: "#ff9345",
  secondary: "#008148",
  tertiary: "#034732",
  disabled: "#808080",
  background: "#EEEEEE",
  text: "#2d2832",
};

type ThemeKeys = "main";

type ThemePaletteKeys = keyof ThemePalette;

type ThemePalettes = { [key in ThemeKeys]: ThemePalette };

const themes: Themes<ThemePalettes> = {
  default: mainThemeColors,
  main: mainThemeColors,
};

type AdditionalColorKeys = "danger" | "faded" | "warning" | "darkBackground";

const additionalColors: { [key in AdditionalColorKeys]: string } = {
  danger: "#BB2222",
  warning: "#BB6622",
  faded: "#b4afbe",
  darkBackground: "#000000",
};

const allColors = {
  ...additionalColors,
  ...mainThemeColors,
};

type AllColorKey = keyof typeof allColors;

// Text
type TextColorKeys =
  | keyof Omit<ThemePalette, "background">
  | AdditionalColorKeys;

export {
  additionalColors,
  AllColorKey,
  allColors,
  mainThemeColors,
  TextColorKeys,
  themes,
  ThemePaletteKeys,
};
