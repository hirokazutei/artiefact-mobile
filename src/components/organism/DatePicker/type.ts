import { DatePickerIOSProps } from "react-native";
import { ButtonProps } from "../../atoms/Button";

type DatePickerMode = DatePickerIOSProps["mode"];

type DatePickerProps = {
  cancelButton?: ButtonProps;
  confirmButton: ButtonProps;
  mode: DatePickerMode;
  isVisible: boolean;
};

export { DatePickerProps, DatePickerMode };
