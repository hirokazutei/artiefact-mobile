// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  array,
  boolean,
  select,
  text,
  withKnobs,
} from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import ValidationField, { ValidationFieldProps } from "../index";

const DEFAULT_PROPS: ValidationFieldProps = {
  value: "",
};

const getRequiredProps = (
  overrides: Partial<ValidationFieldProps> = {}
): ValidationFieldProps => {
  const { value } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    value: text("Value", value),
  };
};

const geOptionalProps = (
  overrides: Partial<ValidationFieldProps> = {}
): Partial<ValidationFieldProps> => {
  const {
    color,
    errors = [],
    infos = [],
    isValidating = false,
    validationResult,
    warnings = [],
  } = overrides;
  return {
    color: select("Color Options", ["primary", "secondary", "tertiary"], color),
    errors: array("Errors", errors),
    infos: array("Information", infos),
    isValidating: boolean("Validating", isValidating),
    validationResult: select(
      "Validation Result Options",
      ["success", "warning", "error"],
      validationResult
    ),
    warnings: array("Warnings", warnings),
  };
};

storiesOf("Molecules/ValidationField", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ValidationField {...getRequiredProps()} {...geOptionalProps()} />
  ));
