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

const DEFAULT_PROPS = {
  value: "",
};

const inputFieldVariations: {
  [key in InputFieldVariation]: React.FC<InputFieldProps>
} = {
  creditCardNumber: InputField.creditCardNumber,
  decimal: InputField.decimal,
  email: InputField.email,
  freeField: InputField.freeField,
  name: InputField.name,
  number: InputField.number,
  oneTimeNumberCode: InputField.oneTimeNumberCode,
  oneTimeCode: InputField.oneTimeCode,
  paragraph: InputField.paragraph,
  passcode: InputField.passcode,
  password: InputField.password,
  phone: InputField.phone,
  url: InputField.url,
  username: InputField.username,
};

const selectVariation: { [key in InputFieldVariation]: InputFieldVariation } = {
  creditCardNumber: "creditCardNumber",
  decimal: "decimal",
  email: "email",
  freeField: "freeField",
  name: "name",
  number: "number",
  oneTimeNumberCode: "oneTimeNumberCode",
  oneTimeCode: "oneTimeCode",
  paragraph: "paragraph",
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
    type,
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
  .add("Input Variation", () => {
    const inputFieldVariationKey = select(
      "InputVariation",
      selectVariation,
      "freeField"
    );
    const Component = inputFieldVariations[inputFieldVariationKey];
    return <Component {...getRequiredProps()} {...geOptionalProps()} />;
  });
