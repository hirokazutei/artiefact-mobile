// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import BackButton, { Props as NavigationBackButtonProps } from "../";

const getOptionalProps = (): NavigationBackButtonProps => {
  return {
    onPress: action("Pressed")
  };
};

storiesOf("Atoms/NavigationBackButton")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => <BackButton {...getOptionalProps()} />);
