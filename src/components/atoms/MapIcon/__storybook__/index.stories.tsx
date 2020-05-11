// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { selectAllColor } from "../../../../../storybook/knobs";
import MapIcon, { Props as MapIconProps } from "../";
import { MapIconTypeKey, MapIconSizeKey } from "../const";

const DEFAULT_PROPS: {
  name: MapIconTypeKey;
} = {
  name: "user",
};

const selectSize: Array<MapIconSizeKey> = ["small", "medium", "large"];

const getRequiredProps = (
  overrides: Partial<MapIconProps> = {}
): MapIconProps => {
  const { name } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    name,
  };
};

const getOptionalProps = (
  overrides: Partial<MapIconProps> = {}
): Partial<MapIconProps> => {
  const { color, size } = overrides;
  return {
    color: select("Color", selectAllColor, color),
    size: select("Size", selectSize, size),
  };
};

storiesOf("Atoms/MapIcon", module)
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <MapIcon {...getRequiredProps()} {...getOptionalProps()} />
  ))
  .add("Text", () => (
    <MapIcon {...getRequiredProps({ name: "text" })} {...getOptionalProps()} />
  ))
  .add("Image", () => (
    <MapIcon {...getRequiredProps({ name: "image" })} {...getOptionalProps()} />
  ))
  .add("Audio", () => (
    <MapIcon {...getRequiredProps({ name: "audio" })} {...getOptionalProps()} />
  ))
  .add("Video", () => (
    <MapIcon {...getRequiredProps({ name: "video" })} {...getOptionalProps()} />
  ));
