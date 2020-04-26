import React from "react";
import { DatePickerIOS, DatePickerIOSProps } from "react-native";
import Modal from "../../molecules/Modal";
import { ButtonProps } from "../../atoms/Button";

type modeType = DatePickerIOSProps["mode"];

type Props = {
  cancelButton?: ButtonProps;
  confirmButton: ButtonProps;
  mode: modeType;
  isVisible: boolean;
};

type State = {
  chosenDate: Date;
};

const currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 18);

export default class IOSDatePicker extends React.Component<Props, State> {
  state: State = { chosenDate: currentDate };

  setDate(newDate: Date) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    const { confirmButton, cancelButton, mode, isVisible } = this.props;
    const { chosenDate } = this.state;
    const { onPress, label } = confirmButton;
    const secondaryButton = cancelButton && cancelButton;
    return (
      <Modal
        isVisible={isVisible}
        primaryButton={{
          onPress: () => onPress(chosenDate),
          label,
        }}
        secondaryButton={secondaryButton}
      >
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={(newDate) => this.setDate(newDate)}
          maximumDate={new Date()}
          mode={mode}
        />
      </Modal>
    );
  }
}
