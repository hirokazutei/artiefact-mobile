import React, { useState } from "react";
import { DatePickerIOS } from "react-native";
import Modal from "../../molecules/Modal";
import { DatePickerProps } from "./type";

/**
 * IOSDatePicker
 *
 * @param param
 *
 * Required:
 * @param props.confirmButton - Button props of Confirm Button
 * @param props.isVisible - if the date picker is visible or not
 *
 * Optional:
 * @param [props.mode] - Mode of date/time select
 * @param [props.cancelButton] - Button props of Cancel Button
 */
const IOSDatePicker = ({
  confirmButton,
  cancelButton,
  mode = "date",
  isVisible,
}: DatePickerProps) => {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 18);
  const [date, setDate] = useState(currentDate);

  const { onPress, label } = confirmButton;
  const secondaryButton = cancelButton && cancelButton;
  return (
    <Modal
      isVisible={isVisible}
      primaryButton={{
        onPress: () => onPress(date),
        label,
      }}
      secondaryButton={secondaryButton}
    >
      <DatePickerIOS
        date={date}
        onDateChange={(newDate) => setDate(newDate)}
        maximumDate={new Date()}
        mode={mode}
      />
    </Modal>
  );
};

export default IOSDatePicker;
