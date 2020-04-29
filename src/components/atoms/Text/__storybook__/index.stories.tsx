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

const selectSize: Array<FontSizeKey> = ["small", "medium", "large"];

const selectEllipsizeMode: Array<
  Exclude<RNTextProps["ellipsizeMode"], undefined>
> = ["head", "middle", "tail", "clip"];

const geOptionalProps = (
  overrides: Partial<TextProps> = {}
): Partial<TextProps> => {
  const {
    align,
    color,
    ellipsizeMode,
    isBold = false,
    isItalic = false,
    isLinethrough = false,
    isUnderline = false,
    numberOfLines = 1,
    size,
  } = overrides;
  return {
    align: select("Align Options", selectTextAlign, align),
    isBold: boolean("isBold", isBold),
    color: select("Color Options", selectAllColor, color),
    ellipsizeMode: select(
      "Ellipsize Mode Options",
      selectEllipsizeMode,
      ellipsizeMode
    ),
    isItalic: boolean("isItalic", isItalic),
    isLinethrough: boolean("isLineThrough", isLinethrough),
    numberOfLines: number("Number of Lines", numberOfLines),
    isUnderline: boolean("isUnderline", isUnderline),
    size: select("Size Options", selectSize, size),
  };
};

storiesOf("Atoms/Text", module)
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
