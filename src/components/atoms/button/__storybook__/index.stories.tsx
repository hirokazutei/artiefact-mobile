// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { ButtonTypes } from "react-native-kinpaku-ui";
import Provider from "../../../../../storybook/Provider";
import { ColorTypeKeys } from "../../../../symbols/colors";
import { ButtonSizeKeys } from "../const";
import Button, { ButtonProps, Round, Sharp } from "../";

const DEFAULT_PROPS = {
  title: "PRESS HERE"
};

const colorSelect: { [key in ColorTypeKeys]?: ColorTypeKeys } = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary"
};

const sizeSelect: { [key in ButtonSizeKeys]: ButtonSizeKeys } = {
  tiny: "tiny",
  small: "small",
  medium: "medium",
  large: "large",
  huge: "huge",
  massive: "massive"
};

const typeSelect: { [key in ButtonTypes]: ButtonTypes } = {
  solid: "solid",
  clear: "clear",
  outline: "outline"
};

const getRequiredProps = (overrides = {}): ButtonProps => {
  const { title } = {
    ...DEFAULT_PROPS,
    ...overrides
  };
  return {
    onPress: action("button-pressed"),
    title: text("Title", title)
  };
};

const getOptionalProps = () => {
  return {
    color: select("Color", colorSelect, "primary" as ColorTypeKeys),
    isDisabled: boolean("Disabled", false),
    isStretched: boolean("Stretched", false),
    size: select("Size", sizeSelect, "default"),
    type: select("Type", typeSelect, "solid" as ButtonTypes)
  };
};

storiesOf("Atoms/Button")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Button {...getRequiredProps()} {...getOptionalProps()} />
  ))
  .add("round", () => <Round {...getRequiredProps()} {...getOptionalProps()} />)
  .add("sharp", () => (
    <Sharp {...getRequiredProps()} {...getOptionalProps()} />
  ));
