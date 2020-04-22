// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { selectAllColor } from "../../../../../storybook/knobs";
import { IconNameKey, IconSizeKey } from "../const";
import IconButton, { IconButtonProps, IconButtonTypeKey } from "../";

const DEFAULT_PROPS: IconButtonProps = {
  name: "camera",
  onPress: action("pressed"),
};

const selectIconType: { [key in IconNameKey]: IconNameKey } = {
  camera: "camera",
  successCircle: "successCircle",
  errorCircle: "errorCircle",
  warningCircle: "warningCircle",
  noConnection: "noConnection",
};

const selectSize: { [key in IconSizeKey]: IconSizeKey } = {
  small: "small",
  medium: "medium",
  large: "large",
};

const selectType: { [key in IconButtonTypeKey]: IconButtonTypeKey } = {
  fill: "fill",
  outline: "outline",
};

const getRequiredProps = (
  overrides: Partial<IconButtonProps> = {}
): IconButtonProps => {
  const { name, onPress, type } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    name: select("name", selectIconType, name),
    onPress,
    type: select("type", selectType, type),
  };
};

const getOptionalProps = (
  overrides: Partial<IconButtonProps> = {}
): Partial<IconButtonProps> => {
  const { color, isDisabled = false, size } = overrides;
  return {
    color: select("Color", selectAllColor, color),
    isDisabled: boolean("Disabled", isDisabled),
    size: select("Size", selectSize, size),
  };
};

storiesOf("Atoms/IconButton")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <IconButton {...getRequiredProps()} {...getOptionalProps()} />
  ))
  .add("Outline", () => (
    <IconButton
      {...getRequiredProps()}
      {...getOptionalProps({ type: "outline" })}
    />
  ))
  .add("Disabled", () => (
    <IconButton
      {...getRequiredProps()}
      {...getOptionalProps({ isDisabled: true })}
    />
  ))
  .add("Icon: Success", () => (
    <IconButton
      {...getRequiredProps({ name: "successCircle" })}
      {...getOptionalProps()}
    />
  ))
  .add("Icon: Error", () => (
    <IconButton
      {...getRequiredProps({ name: "errorCircle" })}
      {...getOptionalProps()}
    />
  ))
  .add("Icon: Warning", () => (
    <IconButton
      {...getRequiredProps({ name: "warningCircle" })}
      {...getOptionalProps()}
    />
  ))
  .add("Icon: noConnection", () => (
    <IconButton
      {...getRequiredProps({ name: "noConnection" })}
      {...getOptionalProps()}
    />
  ));
