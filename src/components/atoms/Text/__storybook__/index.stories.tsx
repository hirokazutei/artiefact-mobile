// @flow
import * as React from "react";
import { TextProps as RNTextProps } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { boolean, select, number, withKnobs } from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import {
  selectAllColor,
  selectTextAlign,
} from "../../../../../storybook/knobs";
import { FontSizeKey } from "../const";
import Text, { TextProps } from "../";

const DEFAULT_TEXT = "Sample Text";

const selectSize: { [key in FontSizeKey]: FontSizeKey } = {
  small: "small",
  medium: "medium",
  large: "large",
};

const selectEllipsizeMode: {
  [key in Exclude<RNTextProps["ellipsizeMode"], undefined>]: Exclude<
    RNTextProps["ellipsizeMode"],
    undefined
  >
} = {
  head: "head",
  middle: "middle",
  tail: "tail",
  clip: "clip",
};

const geOptionalProps = (
  overrides: Partial<TextProps> = {}
): Partial<TextProps> => {
  const {
    align,
    bold = false,
    color,
    ellipsizeMode,
    italic = false,
    lineThrough = false,
    numberOfLines = 1,
    size,
    underline = false,
  } = overrides;
  return {
    align: select("Align Options", selectTextAlign, align),
    bold: boolean("isBold", bold),
    color: select("Color Options", selectAllColor, color),
    ellipsizeMode: select(
      "Ellipsize Mode Options",
      selectEllipsizeMode,
      ellipsizeMode
    ),
    italic: boolean("isItalic", italic),
    lineThrough: boolean("isLineThrough", lineThrough),
    numberOfLines: number("Number of Lines", numberOfLines),
    underline: boolean("isUnderline", underline),
    size: select("Size Options", selectSize, size),
  };
};

storiesOf("Atom/Touchable", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Text.Title {...geOptionalProps()}>{DEFAULT_TEXT}</Text.Title>
  ))
  .add("Heading", () => (
    <Text.Heading {...geOptionalProps()}>{DEFAULT_TEXT}</Text.Heading>
  ))
  .add("SubHeading", () => (
    <Text.SubHeading {...geOptionalProps()}>{DEFAULT_TEXT}</Text.SubHeading>
  ))
  .add("Body", () => (
    <Text.Body {...geOptionalProps()}>{DEFAULT_TEXT}</Text.Body>
  ))
  .add("Label", () => (
    <Text.Label {...geOptionalProps()}>{DEFAULT_TEXT}</Text.Label>
  ))
  .add("Quote", () => (
    <Text.Quote {...geOptionalProps()}>{DEFAULT_TEXT}</Text.Quote>
  ));
