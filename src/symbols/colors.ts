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

const mainThemeColors: ThemePalette = {
  primary: "#ff9345",
  secondary: "#008148",
  tertiary: "#034732",
  disabled: "#808080",
  background: "#EEEEEE",
  text: "#2d2832"
};

type MainThemeNames = "main";

type ThemePalettes = { [key in MainThemeNames]: ThemePalette };

const themes: Themes<ThemePalettes> = {
  default: mainThemeColors,
  main: mainThemeColors
};

const colors: { [key in ColorTypeKeys]: string } = {
  danger: "#ff2323",
  faded: "#b4afbe",
  ...mainThemeColors
};

export { themes, colors, mainThemeColors };
