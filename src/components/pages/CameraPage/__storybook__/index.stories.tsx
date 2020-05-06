// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import CameraPage from "../index";

storiesOf("Pages/CameraPage", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} fullPage={true} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => <CameraPage />);
