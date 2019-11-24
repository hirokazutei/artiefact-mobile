// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { RadioButtonProps, ThemePalette } from "react-native-kinpaku-ui";
import Provider from "../../../../../storybook/Provider";
import { colors } from "../../../../symbols/colors";
import RadioButton from "../";

const DEFAULT_PROPS = {
  active: false
};

const colorSelect: { [key in keyof ThemePalette]?: keyof ThemePalette } = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary"
};

const getRequiredProps = (
  overrides = {}
): RadioButtonProps<typeof colors, null, false> => {
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
  typeof colors,
  null,
  false
>> => {
  return {
    color: select("Color Options", colorSelect, undefined),
    isDisabled: boolean("Disabled", false)
  };
};

storiesOf("Atoms/NavigationBackButton")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <RadioButton {...getRequiredProps()} {...getOptionalPropsProps()} />
  ));
