// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Provider from "../../../../../storybook/Provider";
import MapViewPage from "../";

storiesOf("Pages/MapViewPage")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .add("default", () => <MapViewPage />);
