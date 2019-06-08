import { KeyboardType } from "react-native";

export interface SettingProps {
  keyboardType?: KeyboardKeys;
}

type KeyboardKeys = "default" | "numeric" | "email" | "phone";

const keyboardTypes: Readonly<{ [key in KeyboardKeys]: KeyboardType }> = {
  default: "default",
  numeric: "numeric",
  email: "email-address",
  phone: "phone-pad"
};

const defaultSetting: Required<SettingProps> = {
  keyboardType: "default" as KeyboardKeys
};

/**
 * Resolve Keyboard Types
 *
 * @param keyboardType - keyboard type key
 */
export const resolveKeyboardTypes = (
  keyboardType: KeyboardKeys = defaultSetting.keyboardType
): KeyboardType => {
  return keyboardTypes[keyboardType];
};
