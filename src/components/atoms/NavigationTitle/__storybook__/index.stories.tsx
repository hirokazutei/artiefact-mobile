// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { text, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import NavigationTitle, { Props as NavigationTitleProps } from "../";

const DEFAULT_PROPS = {
  children: "SAMPLE TITLE"
};

const getRequiredProps = (overrides = {}): NavigationTitleProps => {
  const { children } = {
    ...DEFAULT_PROPS,
    ...overrides
  };
  return {
    children: text("Text Option", children)
  };
};

storiesOf("Atoms/NavigationBackButton")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => <NavigationTitle {...getRequiredProps()} />);
