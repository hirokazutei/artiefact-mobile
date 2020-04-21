// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { selectAllColor } from "../../../../../storybook/knobs";
import Icon, { IconProps } from "../";
import { IconSizeKey, IconTypeKey } from "../const";

const DEFAULT_PROPS: IconProps = {
  name: "camera",
};

const typeSelect: { [key in IconTypeKey]: IconTypeKey } = {
  camera: "camera",
  successCircle: "successCircle",
  errorCircle: "errorCircle",
  warningCircle: "warningCircle",
  noConnection: "noConnection",
};

const sizeSelect: { [key in IconSizeKey]: IconSizeKey } = {
  tiny: "tiny",
  small: "small",
  medium: "medium",
  large: "large",
  huge: "huge",
  massive: "massive",
  macro: "macro",
};

const getRequiredProps = (overrides: Partial<IconProps> = {}): IconProps => {
  const { name } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    name: select("Icon Type", typeSelect, name),
  };
};

const getOptionalProps = (
  overrides: Partial<IconProps> = {}
): Partial<IconProps> => {
  const { size, color } = overrides;
  return {
    color: select("Color", selectAllColor, color),
    size: select("Size", sizeSelect, size),
  };
};

storiesOf("Atoms/Icon")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Icon {...getRequiredProps()} {...getOptionalProps()} />
  ))
  .add("Error", () => (
    <Icon
      {...getRequiredProps({ name: "errorCircle" })}
      {...getOptionalProps()}
    />
  ))
  .add("No Connection", () => (
    <Icon
      {...getRequiredProps({ name: "noConnection" })}
      {...getOptionalProps()}
    />
  ))
  .add("Success", () => (
    <Icon
      {...getRequiredProps({ name: "successCircle" })}
      {...getOptionalProps()}
    />
  ))
  .add("Warning", () => (
    <Icon
      {...getRequiredProps({ name: "warningCircle" })}
      {...getOptionalProps()}
    />
  ))
  .add("Tiny", () => (
    <Icon {...getRequiredProps()} {...getOptionalProps({ size: "tiny" })} />
  ))
  .add("Macro", () => (
    <Icon {...getRequiredProps()} {...getOptionalProps({ size: "macro" })} />
  ));
