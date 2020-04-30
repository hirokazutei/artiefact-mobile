// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { selectAllColor } from "../../../../../storybook/knobs";
import CheckBox, { CheckBoxProps } from "../";
import { CheckBoxSizeKey } from "../const";

const selectSize: Array<CheckBoxSizeKey> = ["small", "medium", "large"];

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

storiesOf("Atoms/CheckBox", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Outline", () => (
    <CheckBox {...getRequiredProps()} {...getOptionalProps()} />
  ))
  .add("Fill", () => (
    <CheckBox
      {...getRequiredProps()}
      {...getOptionalProps({ type: "outline" })}
    />
  ))
  .add("Reverse", () => (
    <CheckBox
      {...getRequiredProps()}
      {...getOptionalProps({ type: "reverse" })}
    />
  ));
