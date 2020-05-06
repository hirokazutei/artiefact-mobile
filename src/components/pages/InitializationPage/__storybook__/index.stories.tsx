// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { navigationMockProp } from "../../../../../storybook/mockProps";
import InitializationPage from "../index";

storiesOf("Pages/InitializationPage", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} fullPage={true} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => <InitializationPage navigation={navigationMockProp} />);
