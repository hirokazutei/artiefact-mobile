// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { select, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { ColorTypeKeys } from "../../../../symbols/colors";
import MapIcon, {
  Props as MapIconButtonProps,
  MapIconTypes,
  MapIconSizeKeys
} from "../";

const DEFAULT_PROPS: {
  name: MapIconTypes;
} = {
  name: "user"
};

const typeSelect: Readonly<{ [key in MapIconTypes]: MapIconTypes }> = {
  user: "user",
  text: "text",
  image: "image",
  audio: "audio",
  video: "video"
};

const colorSelect: { [key in ColorTypeKeys]?: ColorTypeKeys } = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary"
};

const sizeSelect: { [key in MapIconSizeKeys]: MapIconSizeKeys } = {
  small: "small",
  medium: "medium",
  large: "large"
};

const getRequiredProps = (overrides = {}): MapIconButtonProps => {
  const { name } = {
    ...DEFAULT_PROPS,
    ...overrides
  };
  return {
    name: select("name", typeSelect, name)
  };
};

const getOptionalProps = () => {
  return {
    color: select("Color", colorSelect, "primary" as ColorTypeKeys),
    size: select("Size", sizeSelect, "medium")
  };
};

storiesOf("Atoms/MapIcon")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <MapIcon {...getRequiredProps()} {...getOptionalProps()} />
  ));
