import { StyleSheet, ViewStyle } from "react-native";

type Styles = {
  base: ViewStyle;
};

/**
 * Stylize Radio Selection
 */
export const stylizeRadioSelection = (): Styles => {
  return StyleSheet.create<Styles>({
    base: {
      flexDirection: "row",
      alignItems: "center",
      zIndex: 3
    }
  });
};
