import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { Props as InputFieldProps } from "../../atoms/InputField";
import InputField from "../../atoms/InputField";
import Text from "../../atoms/Text";
import Stack from "../../atoms/Stack";
import * as symbols from "../../../symbols";

const RNIndicator = require("react-native-indicator");

type Props = {
  isValidating?: boolean;
  validationResult?: ValidationResultType;
  errors?: Array<string>;
  warnings?: Array<string>;
  infos?: Array<string>;
} & InputFieldProps;

type Styles = {
  iconWrapper: ViewStyle;
  inputFieldWrapper: ViewStyle;
  validationFieldWrapper: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  iconWrapper: {
    alignSelf: "center"
  },
  inputFieldWrapper: {
    flex: 1
  },
  validationFieldWrapper: {
    flexDirection: "row",
    borderBottomWidth: symbols.borders.thickness.thin
  }
});

export type ValidationResultType =
  | "success"
  | "warning"
  | "error"
  | "undefined";

type ValidationFieldColorKeys = "primary" | "secondary" | "disabled" | "error";

const validationFieldColors: Readonly<
  { [key in ValidationFieldColorKeys]: string }
> = {
  primary: symbols.colors.primary,
  secondary: symbols.colors.secondary,
  disabled: symbols.colors.disabled,
  error: symbols.colors.danger
};

const validationFieldIcons: Readonly<
  { [key in ValidationResultType]: React.ReactElement }
> = {
  success: <Text>{"✓"}</Text>,
  warning: <Text>{"!"}</Text>,
  error: <Text>{"✖"}</Text>,
  undefined: <View />
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
    isValidating,
    validationResult,
    errors,
    warnings,
    infos,
    color,
    ...inputFieldProps
  } = props;
  const colorStyle = validationFieldColors[color];
  let validationIcon = validationResult
    ? validationFieldIcons[validationResult]
    : null;
  console.log(isValidating);
  if (isValidating) {
    validationIcon = (
      <RNIndicator.DotsLoader size={10} betweenSpace={5} color={colorStyle} />
    );
  }
  return (
    <View>
      <View
        style={[styles.validationFieldWrapper, { borderColor: colorStyle }]}
      >
        <View style={styles.inputFieldWrapper}>
          <InputField {...inputFieldProps} disableLine={true} color={color} />
        </View>
        <View style={styles.iconWrapper}>{validationIcon}</View>
      </View>
      <Stack value="tiny" />
      {errors &&
        errors.map((error, i) => {
          return (
            <Text key={i} size="small" color="danger" align="left">
              {`・${error}`}
            </Text>
          );
        })}
      {warnings &&
        warnings.map((warning, i) => {
          return (
            <Text key={i} size="small" color="primary" align="left">
              {`・${warning}`}
            </Text>
          );
        })}
      {infos &&
        infos.map((info, i) => {
          return (
            <Text key={i} size="small" color="default" align="left">
              {`・${info}`}
            </Text>
          );
        })}
    </View>
  );
};

export default ValidationField;
