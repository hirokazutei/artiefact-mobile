// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { selectThemePaletteColor } from "../../../../../storybook/knobs";
import ShiftingTitle, { ShiftingTitleProps } from "../";

const DEFAULT_PROPS: ShiftingTitleProps = {
  color: selectThemePaletteColor.primary,
};

const getRequiredProps = (overrides = {}): ShiftingTitleProps => {
  const { color } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    color: select("Color", selectThemePaletteColor, color),
  };
};

storiesOf("Atoms/ShiftingTitle")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => <ShiftingTitle {...getRequiredProps()} />);
