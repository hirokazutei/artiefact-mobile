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
const stylizeModal = (): Styles => {
  return StyleSheet.create<Styles>({
    modalView: {
      backgroundColor: allColors.background,
      borderRadius: borders.radius.dull,
    },
    buttonsView: {
      flexDirection: "row",
    },
    buttonView: {
      flex: 1,
    },
  });
};

export { stylizeModal };
