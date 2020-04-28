import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { InputFieldProps } from "../../atoms/InputField";
import InputField from "../../atoms/InputField";
import { Body } from "../../atoms/Text";
import Space from "../../atoms/Space";
import { borders, allColors } from "../../../symbols";
import { TextColorKeys } from "../../../symbols";
import Icon from "../../atoms/Icon";
import { IconTypeKey, IconSizeKey } from "../../atoms/Icon/const";
const RNIndicator = require("react-native-indicator");

type Props = {
  color?: keyof typeof allColors;
  errors?: Array<string>;
  infos?: Array<string>;
  isValidating?: boolean;
  validationResult?: ValidationResultType;
  warnings?: Array<string>;
} & InputFieldProps;

type Styles = {
  iconWrapper: ViewStyle;
  inputFieldWrapper: ViewStyle;
  validationFieldWrapper: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  iconWrapper: {
    alignSelf: "center",
  },
  inputFieldWrapper: {
    flex: 1,
  },
  validationFieldWrapper: {
    flexDirection: "row",
    borderBottomWidth: borders.thickness.thin,
  },
});

type ValidationResultType = "success" | "warning" | "error";

type ListMessagesType = "info" | "warning" | "error";

type ValidationFieldColorKeys = keyof typeof allColors;

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
  info: "text",
  warning: "secondary",
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
const ValidationField = ({
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
      <RNIndicator.DotsLoader size={10} betweenSpace={5} color={colorLiteral} />
    );
  }
  return (
    <>
      <View
        style={[styles.validationFieldWrapper, { borderColor: colorLiteral }]}
      >
        <View style={styles.inputFieldWrapper}>
          <InputField.freeField {...inputFieldProps} />
        </View>
        <View style={styles.iconWrapper}>{validationIcon}</View>
      </View>
      <Space.Stack size="tiny" />
      {errors && listMessages("error", errors)}
      {warnings && listMessages("warning", warnings)}
      {infos && listMessages("info", infos)}
    </>
  );
};

export { Props as ValidationFieldProps, ValidationResultType };

export default ValidationField;
