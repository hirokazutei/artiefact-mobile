import { KeyboardType, TextInputProps } from "react-native";

export type AutoCapitalizeOptions = NonNullable<
  TextInputProps["autoCapitalize"]
>;

export interface SettingProps {
  autoCapitalize?: AutoCapitalizeOptions;
  keyboardType?: KeyboardTypes;
}

export type KeyboardTypes = "default" | "numeric" | "email" | "phone";

const autoCapitalizeTypes: Readonly<
  { [key in AutoCapitalizeOptions]: AutoCapitalizeOptions }
> = {
  none: "none",
  sentences: "sentences",
  words: "words",
  characters: "characters"
};

const keyboardTypes: Readonly<{ [key in KeyboardTypes]: KeyboardType }> = {
  default: "default",
  numeric: "numeric",
  email: "email-address",
  phone: "phone-pad"
};

const defaultSetting: Required<SettingProps> = {
  autoCapitalize: "none" as AutoCapitalizeOptions,
  keyboardType: "default" as KeyboardTypes
};

/**
 * Resolve Keyboard Types
 *
 * @param keyboardType - keyboard type key
 */
export const resolveKeyboardTypes = (
  keyboardType: KeyboardTypes = defaultSetting.keyboardType
): KeyboardType => {
  return keyboardTypes[keyboardType];
};

/**
 * Resolve AutoCapitalize
 *
 * @param autoCapitalize - keyboard type key
 */
export const resolveAutoCapitalize = (
  autoCapitalize: AutoCapitalizeOptions = defaultSetting.autoCapitalize
): AutoCapitalizeOptions => {
  return autoCapitalizeTypes[autoCapitalize];
};
