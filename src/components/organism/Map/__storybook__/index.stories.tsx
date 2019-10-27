// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import Map, { Props } from "../";

const tokyoRegion = {
  currentRegion: {
    latitude: 35.7,
    longitude: 139.75,
    latitudeDelta: 0.24,
    longitudeDelta: 0.16
  }
};

storiesOf("Organism/Map")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Map currentRegion={tokyoRegion.currentRegion} shouldMapUpdate={false} />
  ))
  .add("autoUpdate", () => <Map shouldMapUpdate={true} />)
  .add("currentRegion", () => <Map />);
