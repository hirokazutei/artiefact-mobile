// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { selectAllColor } from "../../../../../storybook/knobs";
import { ButtonSizeKey } from "../const";
import Button, { ButtonProps } from "../";

const DEFAULT_PROPS = {
  label: "PRESS HERE",
};

const selectSize: { [key in ButtonSizeKey]: ButtonSizeKey } = {
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
    color: select("Color Options", selectAllColor, color),
    isDisabled: boolean("isDisabled", isDisabled),
    isStretched: boolean("isStretched", isStretched),
    size: select("Size Options", selectSize, size),
    type,
  };
};

storiesOf("Atom/Button", module)
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
