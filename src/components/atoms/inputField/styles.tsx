import { StyleSheet, TextStyle } from "react-native";
import * as symbols from "../../../symbols";

interface Styles {
  inputField: TextStyle;
}

export const stylizeInputField = () => {
  return StyleSheet.create<Styles>({
    inputField: {
      borderColor: symbols.colors.primary,
      fontSize: 20,
      borderBottomWidth: 3
    }
  });
};
