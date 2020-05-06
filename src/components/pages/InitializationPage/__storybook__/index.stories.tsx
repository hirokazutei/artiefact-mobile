// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
// Because the page has side effects, use the Template instead.
import InitializationPage from "../../../templates/LoadingTemplate";

storiesOf("Pages/InitializationPage", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} fullPage={true} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => <InitializationPage />);
