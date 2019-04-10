type ColorTypeKeys =
  | "danger"
  | "defaultText"
  | "disabled"
  | "faded"
  | "primary"
  | "secondary"
  | "disabled"
  | "white";

export const colors: Readonly<{ [key in ColorTypeKeys]: string }> = {
  danger: "#ff2323",
  defaultText: "#2d2832",
  disabled: "#808080",
  faded: "#b4afbe",
  primary: "#4A0D67",
  secondary: "#ff9345",
  white: "#FFFFFF"
};
