import React from "react";
import { View } from "react-native";
import { InputFieldVariation } from "react-native-kinpaku-ui";
import { Props as InputFieldProps } from "../../atoms/InputField";
import InputField from "../../atoms/InputField";
import { Body } from "../../atoms/Text";
import Space from "../../atoms/Space";
import { allColors } from "../../../symbols";
import { TextColorKeys } from "../../../symbols";
import Icon from "../../atoms/Icon";
import { IconTypeKey, IconSizeKey } from "../../atoms/Icon/const";
// @ts-ignore: No Typing for react-native-indicator
import { DotsLoader } from "react-native-indicator";

type Props = {
  color?: keyof typeof allColors;
  errors?: Array<string>;
  infos?: Array<string>;
  isValidating?: boolean;
  validationResult?: ValidationResultType;
  warnings?: Array<string>;
} & InputFieldProps;

type ValidationResultType = "success" | "warning" | "error";

type ListMessagesType = "info" | "warning" | "error";

type ValidationFieldColorKeys = keyof typeof allColors;

const InputFieldVariationKeys: Array<InputFieldVariation> = [
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

const validationIconNames: Record<ValidationResultType, IconTypeKey> = {
  success: "successCircle",
  warning: "warningCircle",
  error: "errorCircle",
};

const validationFieldIcons = (
  status: ValidationResultType,
  size: IconSizeKey,
  color: ValidationFieldColorKeys
) => {
  const iconName = validationIconNames[status];
  const iconColor = color as TextColorKeys;
  return <Icon name={iconName} size={size} color={iconColor} />;
};

const listMessagesColor: Record<ListMessagesType, TextColorKeys> = {
  info: "primary",
  warning: "warning",
  error: "danger",
};

const listMessages = (type: ListMessagesType, messages: Array<string>) => {
  const color = listMessagesColor[type];
  return messages.map((messages, i) => {
    return (
      <Body key={i} size="small" color={color} align="left">
        {`・${messages}`}
      </Body>
    );
  });
};

/**
 * Validation Field Props
 *
 * @param props - properties
 *
 * Required:
 * @param props.value - input field valuee
 *
 * Optional:
 * @param [props.isValidating] - if the prop is validating
 * @param [props.validationResult] - the result of the validation
 * @param [props.errors] - the list of errors
 * @param [props.warnings] - the list of warnings
 * @param [props.infos] - the list of information
 *
 * Components:
 * @extends InputField
 */

const validationFields: Partial<
  Record<InputFieldVariation, React.FunctionComponent<Props>>
> = {};

for (const key of InputFieldVariationKeys) {
  const InputFieldCompoent = InputField[key];
  validationFields[key] = ({
    color = "primary" as keyof typeof allColors,
    errors,
    infos,
    isValidating,
    validationResult,
    warnings,
    ...inputFieldProps
  }: Props) => {
    const colorLiteral = allColors[color];
    let validationIcon = validationResult
      ? validationFieldIcons(validationResult, "medium", color)
      : null;
    if (isValidating) {
      validationIcon = (
        <DotsLoader size={8} betweenSpace={5} color={colorLiteral} />
      );
    }

    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <InputFieldCompoent
            {...inputFieldProps}
            color={color}
            type="underline"
            rightItem={validationIcon}
          />
          <Space.Stack size="tiny" />
          {errors && listMessages("error", errors)}
          {warnings && listMessages("warning", warnings)}
          {infos && listMessages("info", infos)}
        </View>
      </View>
    );
  };
}

export default validationFields as Record<
  InputFieldVariation,
  React.FunctionComponent<Props>
>;

export { Props, ValidationResultType, InputFieldVariationKeys };
