// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { TouchableType } from "react-native-kinpaku-ui";
import Provider from "../../../../../storybook/Provider";
import { ColorTypeKeys } from "../../../../symbols/colors";
import { IconNames, IconSizeKeys } from "../const";
import IconButton, { Props as IconButtonProps } from "../";

const DEFAULT_PROPS: { name: IconNames; onPress: (args: any) => any } = {
  name: "camera",
  onPress: action("pressed")
};

const iconTypeSelect: { [key in IconNames]: IconNames } = {
  camera: "camera",
  successCircle: "successCircle",
  errorCircle: "errorCircle",
  warningCircle: "warningCircle",
  noConnection: "noConnection"
};

const colorSelect: { [key in ColorTypeKeys]?: ColorTypeKeys } = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary"
};

const sizeSelect: { [key in IconSizeKeys]: IconSizeKeys } = {
  small: "small",
  medium: "medium",
  large: "large"
};

const typeSelect: { [key in TouchableType]: TouchableType } = {
  outline: "outline",
  solid: "solid"
};

const getRequiredProps = (overrides = {}): IconButtonProps => {
  const { name, onPress } = {
    ...DEFAULT_PROPS,
    ...overrides
  };
  return {
    name: select("name", iconTypeSelect, name),
    onPress
  };
};

const getOptionalProps = () => {
  return {
    color: select("Color", colorSelect, "primary" as ColorTypeKeys),
    isDisabled: boolean("Disabled", false),
    size: select("Size", sizeSelect, "default"),
    type: select("Type", typeSelect, "solid" as TouchableType)
  };
};

storiesOf("Atoms/IconButton")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <IconButton {...getRequiredProps()} {...getOptionalProps()} />
  ));
