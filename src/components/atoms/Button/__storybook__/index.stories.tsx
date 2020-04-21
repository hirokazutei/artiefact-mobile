// @flow
import * as React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import Button, { ButtonProps } from "../";
import { ButtonSizeKeys } from "../const";
import { selectAllColorKeys } from "../../../../../storybook/knobs";

const DEFAULT_PROPS = {
  label: "PRESS HERE",
};

const sizeSelect: { [key in ButtonSizeKeys]: ButtonSizeKeys } = {
  tiny: "tiny",
  small: "small",
  medium: "medium",
  large: "large",
  huge: "huge",
  massive: "massive",
};

const getRequiredProps = (
  overrides: Partial<ButtonProps> = {}
): ButtonProps => {
  const { label } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    onPress: action("button-pressed"),
    label: text("Title", label),
  };
};

const geOptionalProps = (
  overrides: Partial<ButtonProps> = {}
): Partial<ButtonProps> => {
  const {
    color,
    isDisabled = false,
    isStretched = false,
    size,
    type,
  } = overrides;
  return {
    color: select("Color Options", selectAllColorKeys, color),
    isDisabled: boolean("isDisabled", isDisabled),
    isStretched: boolean("isStretched", isStretched),
    onPress: action("button-pressed"),
    size: select("Size Options", sizeSelect, size),
    type,
  };
};

storiesOf("UI/Button", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Button {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Clear", () => (
    <Button {...getRequiredProps()} {...geOptionalProps({ type: "clear" })} />
  ))
  .add("Outline", () => (
    <Button {...getRequiredProps()} {...geOptionalProps({ type: "outline" })} />
  ))
  .add("Tiny", () => (
    <Button {...getRequiredProps()} {...geOptionalProps({ size: "tiny" })} />
  ))
  .add("Massive", () => (
    <Button {...getRequiredProps()} {...geOptionalProps({ size: "massive" })} />
  ))
  .add("Disabled", () => (
    <Button
      {...getRequiredProps()}
      {...geOptionalProps({ isDisabled: true })}
    />
  ));
