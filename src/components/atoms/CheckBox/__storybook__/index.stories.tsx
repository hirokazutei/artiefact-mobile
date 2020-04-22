// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { selectAllColor } from "../../../../../storybook/knobs";
import CheckBox, { CheckBoxProps } from "../";
import { CheckBoxSizeKey } from "../const";

const selectSize: { [key in CheckBoxSizeKey]?: CheckBoxSizeKey } = {
  small: "small",
  medium: "medium",
  large: "large",
};

const getRequiredProps = (): CheckBoxProps => {
  return {
    onPress: action("button-pressed"),
  };
};

const getOptionalProps = (
  overrides: Partial<CheckBoxProps> = {}
): Partial<CheckBoxProps> => {
  const { active = false, color, isDisabled = false, size, type } = overrides;
  return {
    active: boolean("Active", active),
    color: select("Color Options", selectAllColor, color),
    isDisabled: boolean("isDisabled", isDisabled),
    size: select("Size Options", selectSize, size),
    type,
  };
};

storiesOf("Atom/CheckBox", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <CheckBox {...getRequiredProps()} {...getOptionalProps()} />
  ));
