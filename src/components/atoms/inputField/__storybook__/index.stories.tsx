// @flow
import * as React from "react";
import { FlexAlignType, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import {
  boolean,
  number,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import Provider from "../../../../../storybook/Provider";
import { TextSizeKeys } from "../../../../symbols/text";
import InputField, { Props as InputFieldProps } from "../";
import { KeyboardTypes, AutoCapitalizeOptions } from "../settings";
import { InputFieldColorKeys } from "../styles";

const selectKeyboardType: {
  [keyboardTypeKeys in KeyboardTypes]: KeyboardTypes;
} = {
  default: "default",
  numeric: "numeric",
  email: "email",
  phone: "phone"
};

const selectAutoCapitalizeType: {
  [key in AutoCapitalizeOptions]: AutoCapitalizeOptions;
} = {
  none: "none",
  sentences: "sentences",
  words: "words",
  characters: "characters"
};

const selectColor: { [key in InputFieldColorKeys]?: InputFieldColorKeys } = {
  primary: "primary",
  secondary: "secondary",
  disabled: "disabled",
  error: "error"
};

const selectTextSize: { [key in TextSizeKeys]: TextSizeKeys } = {
  tiny: "tiny",
  small: "small",
  medium: "medium",
  large: "large",
  huge: "huge",
  massive: "massive",
  macro: "macro"
};

const selectAlign: { [key in string]: FlexAlignType } = {
  "felx-start": "flex-start",
  "flex-end": "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
};

const getRequiredProps = (): InputFieldProps => {
  return {
    onChangeText: action("Text Changed")
  };
};

const getOptionalProps = () => {
  return {
    defaultValue: text("Default Value", ""),
    editable: boolean("Editable", true),
    maxLength: number("Max Length", 280),
    placeholder: text("Placeholder", "Placeholder Text"),
    secureTextEntry: boolean("Secure Text Entry", false),
    value: text("Value", ""),
    // Settings
    autoCapitalize: select(
      "AutoCapitalize Option",
      selectAutoCapitalizeType,
      selectAutoCapitalizeType.none
    ),
    keyboardType: select(
      "Keyboard Type",
      selectKeyboardType,
      selectKeyboardType.default
    ),
    // Style
    align: select("Align", selectAlign, selectAlign["flex-start"]),
    color: select("Color", selectColor, selectColor.primary),
    size: select("Size", selectTextSize, selectTextSize.medium),
    isStretched: boolean("Stretched", false),
    isDisabled: boolean("Disabled", false),
    isErrornous: boolean("Errornous", false),
    disableLine: boolean("Disable Line", false)
  };
};

storiesOf("Atoms/FieldInput")
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <View style={{ flexDirection: "row" }}>
      <InputField {...getRequiredProps()} {...getOptionalProps()} />
    </View>
  ));
