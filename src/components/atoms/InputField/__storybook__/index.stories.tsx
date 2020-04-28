// @flow
import * as React from "react";
import { InputFieldVariation } from "react-native-kinpaku-ui";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import {
  boolean,
  select,
  text,
  withKnobs,
  number,
} from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { selectAllColor } from "../../../../../storybook/knobs";
import InputField, { InputFieldProps } from "../";
import { InputFieldSizeKey } from "../const";

const DEFAULT_PROPS = {
  value: "",
};

const selectVariation: Array<InputFieldVariation> = [
  "creditCardNumber",
  "decimal",
  "email",
  "freeField",
  "name",
  "number",
  "oneTimeNumberCode",
  "oneTimeCode",
  "paragraph",
  "passcode",
  "password",
  "phone",
  "url",
  "username",
];

const selectSize: Array<InputFieldSizeKey> = ["small", "medium", "large"];

const getRequiredProps = (
  overrides: Partial<InputFieldProps> = {}
): InputFieldProps => {
  const { value } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    value: text("Value", value),
  };
};

const geOptionalProps = (
  overrides: Partial<InputFieldProps> = {}
): Partial<InputFieldProps> => {
  const {
    autoFocus = false,
    backgroundColor,
    borderColor,
    color,
    defaultValue = "",
    isDisabled = false,
    maxLength,
    placeholder = "",
    size,
    type,
    textColor,
  } = overrides;
  return {
    autoFocus: boolean("Auto Focus", autoFocus),
    backgroundColor: select(
      "Background Color Options",
      selectAllColor,
      backgroundColor
    ),
    borderColor: select("Border Color Options", selectAllColor, borderColor),
    color: select("Color Options", selectAllColor, color),
    defaultValue: text("Default Value", defaultValue),
    isDisabled: boolean("Disabled", isDisabled),
    maxLength: maxLength ? number("Max Length", maxLength) : maxLength,
    onBlur: action("on-blur"),
    onChange: action("on-change"),
    onEndEditing: action("on-end-editing"),
    onFocus: action("on-focus"),
    onKeyPress: action("on-key-press"),
    placeholder: text("Place Holder", placeholder),
    size: select("Size Options", selectSize, size),
    type,
    textColor: select("Text Color Options", selectAllColor, textColor),
  };
};

storiesOf("Atoms/InputField", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <InputField.freeField {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Shape: Underline", () => (
    <InputField.freeField
      {...getRequiredProps()}
      {...geOptionalProps({ type: "underline" })}
    />
  ))
  .add("Shape: Fill", () => (
    <InputField.freeField
      {...getRequiredProps()}
      {...geOptionalProps({ type: "fill" })}
    />
  ))
  .add("Disabled", () => (
    <InputField.freeField
      {...getRequiredProps()}
      {...geOptionalProps({ isDisabled: true })}
    />
  ))
  .add("Input Variation", () => {
    const inputFieldVariationKey = select(
      "InputVariation",
      selectVariation,
      "freeField"
    );
    const Component = InputField[inputFieldVariationKey];
    return <Component {...getRequiredProps()} {...geOptionalProps()} />;
  });
