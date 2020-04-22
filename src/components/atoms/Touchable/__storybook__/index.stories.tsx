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

const selectSize: { [key in TouchableSizeKey]: TouchableSizeKey } = {
  tiny: "tiny",
  small: "small",
  medium: "medium",
  large: "large",
  huge: "huge",
  massive: "massive",
};

const getRequiredProps = (): Omit<TouchableProps, "children"> => {
  return {
    onPress: action("button-pressed"),
  };
};

const geOptionalProps = (
  overrides: Partial<TouchableProps> = {}
): Partial<TouchableProps> => {
  const { color, isDisabled = false, isStretched = false, size } = overrides;
  return {
    color: select("Color Options", selectAllColor, color),
    isDisabled: boolean("isDisabled", isDisabled),
    isStretched: boolean("isStretched", isStretched),
    size: select("Size Options", selectSize, size),
  };
};

storiesOf("Atom/Touchable", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Touchable.Fill {...getRequiredProps()} {...geOptionalProps()}>
      {DEFAULT_CHILDREN}
    </Touchable.Fill>
  ))
  .add("Outline", () => (
    <Touchable.Outline {...getRequiredProps()} {...geOptionalProps()}>
      {DEFAULT_CHILDREN}
    </Touchable.Outline>
  ))
  .add("Disabled", () => (
    <Touchable.Fill
      {...getRequiredProps()}
      {...geOptionalProps({ isDisabled: true })}
    >
      {DEFAULT_CHILDREN}
    </Touchable.Fill>
  ));
