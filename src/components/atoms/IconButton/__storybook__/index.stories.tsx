// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { AllColorKeys } from "../../../../symbols";
import { IconNames, IconSizes } from "../const";
import IconButton, { Props as IconButtonProps } from "../";

const DEFAULT_PROPS: { name: IconNames; onPress: (args: any) => any } = {
  name: "camera",
  onPress: action("pressed"),
};

const iconTypeSelect: { [key in IconNames]: IconNames } = {
  camera: "camera",
  successCircle: "successCircle",
  errorCircle: "errorCircle",
  warningCircle: "warningCircle",
  noConnection: "noConnection",
};

const colorSelect: { [key in AllColorKeys]?: AllColorKeys } = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
};

const sizeSelect: { [key in IconSizes]: IconSizes } = {
  small: "small",
  medium: "medium",
  large: "large",
};

const getRequiredProps = (overrides = {}): IconButtonProps => {
  const { name, onPress } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    name: select("name", iconTypeSelect, name),
    onPress,
  };
};

const getOptionalProps = () => {
  return {
    color: select("Color", colorSelect, "primary" as AllColorKeys),
    isDisabled: boolean("Disabled", false),
    size: select("Size", sizeSelect, "default"),
  };
};

storiesOf("Atoms/IconButton")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <IconButton {...getRequiredProps()} {...getOptionalProps()} />
  ));
