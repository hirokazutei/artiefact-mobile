// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { selectAllColor } from "../../../../../storybook/knobs";
import Icon, { Props as IconProps } from "../";
import { IconSizeKey } from "../const";

const DEFAULT_PROPS: IconProps = {
  name: "camera",
};

const selectSize: Array<IconSizeKey> = [
  "tiny",
  "small",
  "medium",
  "large",
  "huge",
  "massive",
  "macro",
];

const getRequiredProps = (overrides: Partial<IconProps> = {}): IconProps => {
  const { name } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    name,
  };
};

const getOptionalProps = (
  overrides: Partial<IconProps> = {}
): Partial<IconProps> => {
  const { size, color } = overrides;
  return {
    color: select("Color", selectAllColor, color),
    size: select("Size", selectSize, size),
  };
};

storiesOf("Atoms/Icon", module)
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
  ));
