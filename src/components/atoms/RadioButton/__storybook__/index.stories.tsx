// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { RadioButtonProps } from "react-native-kinpaku-ui";
import { AllColorKeys, allColors } from "../../../../symbols";
import Provider from "../../../../../storybook/Provider";
import RadioButton from "../";

const DEFAULT_PROPS = {
  active: false
};

const colorSelect: { [key in AllColorKeys]?: AllColorKeys } = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary"
};

const getRequiredProps = (
  overrides = {}
): RadioButtonProps<typeof allColors, null, false> => {
  const { active } = {
    ...DEFAULT_PROPS,
    ...overrides
  };
  return {
    active: boolean("Active", active),
    onPress: action("Pressed")
  };
};

const getOptionalPropsProps = (): Partial<RadioButtonProps<
  typeof allColors,
  null,
  false
>> => {
  return {
    color: select("Color Options", colorSelect, undefined),
    isDisabled: boolean("Disabled", false)
  };
};

storiesOf("Atoms/RadioButton")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <RadioButton {...getRequiredProps()} {...getOptionalPropsProps()} />
  ));
