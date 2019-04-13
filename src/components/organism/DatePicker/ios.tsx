import React from "react";
import { DatePickerIOS, DatePickerIOSProps } from "react-native";
import Modal from "../../molecules/Modal";
import { Props as ButtonProps } from "../../atoms/Button";

type modeType = DatePickerIOSProps["mode"];

type Props = {
  cancelButton?: ButtonProps;
  confirmButton: ButtonProps;
  mode: modeType;
  isVisible: boolean;
};

export default class IOSDatePicker extends React.Component<Props> {
  state = { chosenDate: new Date() };

  setDate(newDate: Date) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    const { confirmButton, cancelButton, mode, isVisible } = this.props;
    return (
      <Modal
        isVisible={isVisible}
        primaryButton={{ ...confirmButton }}
        secondaryButton={cancelButton && { ...cancelButton }}
      >
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={newDate => this.setDate(newDate)}
          maximumDate={new Date()}
          mode={mode}
        />
      </Modal>
    );
  }
}
