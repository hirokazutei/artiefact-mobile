// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { ColorTypeKeys } from "../../../../symbols/colors";
import Icon, { Props, IconSizes, IconTypes } from "../";

const DEFAULT_PROPS: Props = {
  name: "camera"
};

const typeSelect: { [key in IconTypes]: IconTypes } = {
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

const sizeSelect: { [key in IconSizes]: IconSizes } = {
  tiny: "tiny",
  small: "small",
  medium: "medium",
  large: "large",
  huge: "huge",
  massive: "massive",
  macro: "macro"
};

const getRequiredProps = (overrides = {}): Props => {
  const { name } = {
    ...DEFAULT_PROPS,
    ...overrides
  };
  return {
    name: select("Icon Type", typeSelect, name)
  };
};

const getOptionalProps = () => {
  return {
    color: select("Color", colorSelect, "primary" as ColorTypeKeys),
    size: select("Size", sizeSelect, "medium")
  };
};

storiesOf("Atoms/Icon")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Icon {...getRequiredProps()} {...getOptionalProps()} />
  ));
