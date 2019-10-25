import { Themes, ThemePalette } from "react-native-kinpaku-ui";

export type ColorTypeKeys =
  | "danger"
  | "text"
  | "disabled"
  | "faded"
  | "primary"
  | "secondary"
  | "tertiary"
  | "disabled"
  | "background";

export const mainThemeColors: ThemePalette = {
  primary: "#ff9345",
  secondary: "#008148",
  tertiary: "#034732",
  disabled: "#808080",
  background: "#EEEEEE",
  text: "#2d2832"
};

type MainThemeNames = "main";

const mainThemes: Readonly<{ [key in MainThemeNames]: ThemePalette }> = {
  main: mainThemeColors
};

export const themes: Themes<typeof mainThemes> = {
  default: mainThemeColors,
  main: mainThemeColors
};

export const colors: Readonly<{ [key in ColorTypeKeys]: string }> = {
  danger: "#ff2323",
  faded: "#b4afbe",
  ...mainThemeColors
};
