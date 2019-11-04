// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { TextColorKeys } from "../../../../symbols/text";
import ShiftingTitle, { Props as ShiftingTitleProps } from "../";

const selectColor: { [key in TextColorKeys]?: TextColorKeys } = {
  primary: "primary",
  secondary: "secondary"
};

const DEFAULT_PROPS: ShiftingTitleProps = {
  color: selectColor.primary
};

const getRequiredProps = (overrides = {}): ShiftingTitleProps => {
  const { color } = {
    ...DEFAULT_PROPS,
    ...overrides
  };
  return {
    color: select("Color", selectColor, color)
  };
};

storiesOf("Atoms/ShiftingTitle")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => <ShiftingTitle {...getRequiredProps()} />);
