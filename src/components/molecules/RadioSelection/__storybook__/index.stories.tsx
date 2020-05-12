// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Provider from "../../../../../storybook/Provider";
import RadioSelection, { Props as RadioSelectionProps } from "../index";

const DEFAULT_PROPS: RadioSelectionProps = {
  active: false,
  label: "Sample Content",
  onPress: action("selection-pressed"),
};

const getRequiredProps = (
  overrides: Partial<RadioSelectionProps> = {}
): RadioSelectionProps => {
  const { active, label, onPress } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    active: boolean("Active", active),
    label: text("Label", label),
    onPress,
  };
};

const geOptionalProps = (
  overrides: Partial<RadioSelectionProps> = {}
): Partial<RadioSelectionProps> => {
  const { color, isDisabled = false, size } = overrides;
  return {
    isDisabled: boolean("Disabled", isDisabled),
    color: select("Color Options", ["primary", "secondary"], color),
    size: select("Size Options", ["small", "medium", "large"], size),
  };
};

storiesOf("Molecules/RadioSelection", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <RadioSelection {...getRequiredProps()} {...geOptionalProps()} />
  ));
