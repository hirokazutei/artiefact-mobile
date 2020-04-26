import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { InputFieldProps } from "../../atoms/InputField";
import InputField from "../../atoms/InputField";
import { Body } from "../../atoms/Text";
import Space from "../../atoms/Space";
import { borders, allColors, themes } from "../../../symbols";
import { TextColorKeys } from "../../../symbols";
import Icon from "../../atoms/Icon";
import { IconTypeKey, IconSizeKey } from "../../atoms/Icon/const";
import { Diff } from "../../../type/tsUtility";
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

export type ValidationResultType = "success" | "warning" | "error";

type ValidationFieldColorKeys = keyof (typeof themes & typeof allColors);

const validationIconNames: Readonly<
  { [key in ValidationResultType]: IconTypeKey | null }
> = {
  success: "successCircle",
  warning: "warningCircle",
  error: "errorCircle",
};

const validationFieldIcons = (
  status: ValidationResultType,
  size: IconSizeKey,
  color: ValidationFieldColorKeys
): React.ReactElement => {
  const iconName = validationIconNames[status];
  const iconColor = color as TextColorKeys;
  if (iconName != null) {
    return <Icon name={iconName} size={size} color={iconColor} />;
  }
  return <View />;
};

const listMessagesColor: Readonly<
  { [key in Diff<ValidationResultType, "success"> | "info"]?: TextColorKeys }
> = {
  info: "text",
  warning: "secondary",
  error: "danger",
};

const listMessages = (
  type: Diff<ValidationResultType, "success"> | "info",
  messages: Array<string>
) => {
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
 * @param props - properties
 * @param [props.isValidating] - if the prop is validating
 * @param [props.validationResult] - the result of the validation
 * @param [props.errors] - the list of errors
 * @param [props.warnings] - the list of warnings
 * @param [props.infos] - the list of information
 */
const ValidationField: React.FC<Props> = (props: Props): React.ReactElement => {
  const {
    color = "primary" as keyof typeof allColors,
    errors,
    infos,
    isValidating,
    validationResult,
    warnings,
    ...inputFieldProps
  } = props;
  const colorLiteral = allColors[color as keyof typeof allColors];
  let validationIcon = validationResult
    ? validationFieldIcons(validationResult, "medium", color)
    : null;
  if (isValidating) {
    validationIcon = (
      <RNIndicator.DotsLoader size={10} betweenSpace={5} color={colorLiteral} />
    );
  }
  // Free Field Should Be Changed to be customizable.
  return (
    <View>
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
    </View>
  );
};

export default ValidationField;
