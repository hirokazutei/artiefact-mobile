// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { number, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import LoadingComma, { LoadingCommaProps } from "../index";

const DEFAULT_PROPS: LoadingCommaProps = {
  commaLength: 3,
  speed: 300,
};

const getRequiredProps = (
  overrides: Partial<LoadingCommaProps> = {}
): LoadingCommaProps => {
  const { commaLength, speed } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    commaLength: number("Comma Length", commaLength),
    speed: number("Speed", speed),
  };
};

storiesOf("Molecules/LoadingComma", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => <LoadingComma {...getRequiredProps()} />);
