import React from "react";
import { KeyboardType } from "react-native";

export interface SettingProps {
  keyboardType?: KeyboardKeys;
}

type KeyboardKeys = "default" | "numeric" | "email" | "phone";

const keyboardTypes: { [key in KeyboardKeys]: KeyboardType } = {
  default: "default",
  numeric: "numeric",
  email: "email-address",
  phone: "phone-pad"
};

const defaultSetting = {
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
