// @flow
import * as React from "react";
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

const DEFAULT_PROPS = {
  value: "",
};

const variationSelect = {
  creditCardNumber: "creditCardNumber",
  decimal: "decimal",
  email: "email",
  freeField: "freeField",
  name: "name",
  number: "number",
  oneTimeNumberCode: "oneTimeNumberCode",
  oneTimeCode: "oneTimeCode",
  paragraph: "paragragh",
  passcode: "passcode",
  password: "password",
  phone: "phone",
  url: "url",
  username: "username",
};

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
    shape,
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
    shape,
    textColor: select("Text Color Options", selectAllColor, textColor),
  };
};

storiesOf("UI/InputField", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <InputField.freeField {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Shape: Sharp", () => (
    <InputField.freeField
      {...getRequiredProps()}
      {...geOptionalProps({ shape: "sharp" })}
    />
  ))
  .add("Shape: Circular", () => (
    <InputField.freeField
      {...getRequiredProps()}
      {...geOptionalProps({ shape: "circular" })}
    />
  ))
  .add("Disabled", () => (
    <InputField.freeField
      {...getRequiredProps()}
      {...geOptionalProps({ isDisabled: true })}
    />
  ))
  .add("Size: Small", () => (
    <InputField.freeField
      {...getRequiredProps()}
      {...geOptionalProps({ size: "small" })}
    />
  ))
  .add("Size: Large", () => (
    <InputField.freeField
      {...getRequiredProps()}
      {...geOptionalProps({ size: "large" })}
    />
  ))
  .add("Variation: CreditCardNumber", () => (
    <InputField.creditCardNumber
      {...getRequiredProps()}
      {...geOptionalProps()}
    />
  ))
  .add("Variation: Decimal", () => (
    <InputField.decimal {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Variation: Email", () => (
    <InputField.email {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Variation: Name", () => (
    <InputField.name {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Variation: Number", () => (
    <InputField.number {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Variation: OneTimeNumberCode", () => (
    <InputField.oneTimeNumberCode
      {...getRequiredProps()}
      {...geOptionalProps()}
    />
  ))
  .add("Variation: OneTimeCode", () => (
    <InputField.oneTimeCode {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Variation: Paragraph", () => (
    <InputField.paragragh {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Variation: Passcode", () => (
    <InputField.passcode {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Variation: Password", () => (
    <InputField.password {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Variation: Phone", () => (
    <InputField.phone {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Variation: URL", () => (
    <InputField.url {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Variation: Username", () => (
    <InputField.username {...getRequiredProps()} {...geOptionalProps()} />
  ));
