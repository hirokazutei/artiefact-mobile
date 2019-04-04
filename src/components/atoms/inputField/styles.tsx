import { StyleSheet, TextStyle } from "react-native";
import * as symbols from "../../../symbols";

interface Styles {
  inputField: TextStyle;
}

/**
 * Stylize Input Field
 */
export const stylizeInputField = (): Styles => {
  return StyleSheet.create<Styles>({
    inputField: {
      borderColor: symbols.colors.primary,
      fontSize: 20,
      borderBottomWidth: 3
    }
  });
};
