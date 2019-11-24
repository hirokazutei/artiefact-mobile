import { StyleSheet, ViewStyle } from "react-native";
import { allColors, borders } from "../../../symbols";

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
      backgroundColor: allColors.background,
      borderRadius: borders.radius.round
    },
    buttonsView: {
      flexDirection: "row"
    },
    buttonView: {
      flex: 1
    }
  });
};
