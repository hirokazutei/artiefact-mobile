// @flow
import * as React from "react";
import { HeaderBackButtonProps, HeaderBackButton } from "react-navigation";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";

const getOptionalProps = (): HeaderBackButtonProps => {
  return {
    onPress: action("Pressed"),
  };
};

storiesOf("Atoms/NavigationBackButton", module)
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => <HeaderBackButton {...getOptionalProps()} />);
