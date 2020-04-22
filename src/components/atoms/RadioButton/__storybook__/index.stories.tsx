// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { selectAllColor } from "../../../../../storybook/knobs";
import RadioButton, { RadioButtonProps } from "../";

const DEFAULT_PROPS = {
  active: false,
};

const getRequiredProps = (
  overrides: Partial<RadioButtonProps> = {}
): RadioButtonProps => {
  const { active } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    active: boolean("Active", active),
    onPress: action("Pressed"),
  };
};

const getOptionalPropsProps = (
  overrides: Partial<RadioButtonProps> = {}
): Partial<RadioButtonProps> => {
  const { color, isDisabled = false } = overrides;
  return {
    color: select("Color Options", selectAllColor, color),
    isDisabled: boolean("Disabled", isDisabled),
  };
};

storiesOf("Atoms/RadioButton")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <RadioButton {...getRequiredProps()} {...getOptionalPropsProps()} />
  ))
  .add("Disabled", () => (
    <RadioButton
      {...getRequiredProps()}
      {...getOptionalPropsProps({ isDisabled: true })}
    />
  ));
