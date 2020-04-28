// @flow
import * as React from "react";
import { Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { boolean, object, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Provider from "../../../../../storybook/Provider";
import Modal, { ModalProps } from "../index";

const DEFAULT_PROPS: ModalProps = {
  children: <Text>Sample Content</Text>,
  isVisible: true,
};

const getRequiredProps = (overrides: Partial<ModalProps> = {}): ModalProps => {
  const { children, isVisible } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    children,
    isVisible: boolean("Visible", isVisible),
  };
};

const geOptionalProps = (
  overrides: Partial<ModalProps> = {}
): Partial<ModalProps> => {
  const { avoidKeyboard = false, primaryButton, secondaryButton } = overrides;
  return {
    avoidKeyboard: boolean("Avoid Keyboard", avoidKeyboard),
    onBackButtonPress: action("back-buttton-pressed"),
    onBackdropPress: action("backdrop-pressed"),
    onModalHide: action("modal-hidden"),
    onModalShow: action("modal-shown"),
    onSwipeComplete: action("swiped"),
    primaryButton: object("Primary Button", primaryButton),
    secondaryButton: object("Secondary Button", secondaryButton),
  };
};

storiesOf("Molecules/Modal", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Modal {...getRequiredProps()} {...geOptionalProps()} />
  ));
