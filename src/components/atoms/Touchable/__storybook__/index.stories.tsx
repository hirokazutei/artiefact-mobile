// @flow
import * as React from "react";
import { Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { selectAllColor } from "../../../../../storybook/knobs";
import { TouchableSizeKey } from "../const";
import Touchable, { TouchableProps } from "../";

const DEFAULT_CHILDREN = <Text>Sample</Text>;

const selectSize: Array<TouchableSizeKey> = [
  "tiny",
  "small",
  "medium",
  "large",
  "huge",
  "massive",
];

const getRequiredProps = (): Omit<TouchableProps, "children"> => {
  return {
    onPress: action("button-pressed"),
  };
};

const geOptionalProps = (
  overrides: Partial<TouchableProps> = {}
): Partial<TouchableProps> => {
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

storiesOf("Atoms/Touchable", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Touchable.Circular {...getRequiredProps()} {...geOptionalProps()}>
      {DEFAULT_CHILDREN}
    </Touchable.Circular>
  ))
  .add("Round", () => (
    <Touchable.Round {...getRequiredProps()} {...geOptionalProps()}>
      {DEFAULT_CHILDREN}
    </Touchable.Round>
  ))
  .add("Sharp", () => (
    <Touchable.Sharp {...getRequiredProps()} {...geOptionalProps()}>
      {DEFAULT_CHILDREN}
    </Touchable.Sharp>
  ))
  .add("Outline Default", () => (
    <Touchable.Circular
      {...getRequiredProps()}
      {...geOptionalProps({ type: "outline" })}
    >
      {DEFAULT_CHILDREN}
    </Touchable.Circular>
  ))
  .add("Outline Round", () => (
    <Touchable.Round
      {...getRequiredProps()}
      {...geOptionalProps({ type: "outline" })}
    >
      {DEFAULT_CHILDREN}
    </Touchable.Round>
  ))
  .add("Outline Sharp", () => (
    <Touchable.Sharp
      {...getRequiredProps()}
      {...geOptionalProps({ type: "outline" })}
    >
      {DEFAULT_CHILDREN}
    </Touchable.Sharp>
  ));
