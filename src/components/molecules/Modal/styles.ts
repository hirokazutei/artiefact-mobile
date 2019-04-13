import { StyleSheet, ViewStyle } from "react-native";
import * as symbols from "../../../symbols";

type Styles = {
  modalView: ViewStyle;
  buttonsView: ViewStyle;
  buttonView: ViewStyle;
};

/**
 * Stylize Modal
 */
export const stylizeModal = (): Styles => {
  return StyleSheet.create<Styles>({
    modalView: {
      backgroundColor: symbols.colors.white,
      borderRadius: symbols.borders.radius.round
    },
    buttonsView: {
      flexDirection: "row"
    },
    buttonView: {
      flex: 1
    }
  });
};
