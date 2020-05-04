// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { boolean, object, select, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Provider from "../../../../../storybook/Provider";
import { DatePickerProps, DatePickerMode } from "../type";
import { IOSDatePicker } from "../index";

const DEFAULT_PROPS: DatePickerProps = {
  mode: "date",
  isVisible: true,
  confirmButton: {
    onPress: action("confirm-button-pressed"),
    label: "Confirm",
  },
};

const selectMode: Array<Exclude<DatePickerMode, undefined>> = [
  "date",
  "time",
  "datetime",
];

const getRequiredProps = (
  overrides: Partial<DatePickerProps> = {}
): DatePickerProps => {
  const { mode, isVisible, confirmButton } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    mode: select("Date Picker Mode Options", selectMode, mode),
    isVisible: boolean("Visible", isVisible),
    confirmButton: object("Confirm Button Props", confirmButton),
  };
};

const geOptionalProps = (
  overrides: Partial<DatePickerProps> = {}
): Partial<DatePickerProps> => {
  const { cancelButton } = overrides;
  return {
    cancelButton: object("Cancel Button Props", cancelButton),
  };
};

storiesOf("Organism/DatePicker", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <IOSDatePicker {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("With Cancel Button", () => (
    <IOSDatePicker
      {...getRequiredProps()}
      {...geOptionalProps({
        cancelButton: {
          onPress: action("cancel-button-pressed"),
          label: "Cancel",
        },
      })}
    />
  ));
