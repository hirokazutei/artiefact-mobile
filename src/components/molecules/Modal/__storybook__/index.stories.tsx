// @flow
import * as React from "react";
import { Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { boolean, object, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Provider from "../../../../../storybook/Provider";
import Modal, { ModalProps } from "../index";
import { ButtonProps } from "../../../atoms/Button";

const DEFAULT_PROPS: ModalProps = {
  children: (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, mi
      non laoreet mattis, lectus libero dictum sem, ut aliquam magna dui nec
      sapien.
    </Text>
  ),
  isVisible: true,
};

const PRIMARY_BUTTON_PROPS: ButtonProps = {
  onPress: action("primary-button-pressed"),
  label: "A Button",
};

const SECONDARY_BUTTON_PROPS: ButtonProps = {
  onPress: action("secondary-button-pressed"),
  label: "B Button",
};

const getRequiredProps = (overrides: Partial<ModalProps> = {}): ModalProps => {
  const { children, isVisible } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    children: children,
    isVisible: boolean("Visible", isVisible),
  };
};

const geOptionalProps = (
  overrides: Partial<ModalProps> = {}
): Partial<ModalProps> => {
  const {
    avoidKeyboard = false,
    primaryButton,
    secondaryButton,
    title = "",
  } = overrides;
  return {
    avoidKeyboard: boolean("Avoid Keyboard", avoidKeyboard),
    onBackButtonPress: action("back-buttton-pressed"),
    onBackdropPress: action("backdrop-pressed"),
    onModalHide: action("modal-hidden"),
    onModalShow: action("modal-shown"),
    onSwipeComplete: action("swiped"),
    primaryButton: object("Primary Button", primaryButton),
    secondaryButton: object("Secondary Button", secondaryButton),
    title: text("Title", title),
  };
};

storiesOf("Molecules/Modal", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Modal {...getRequiredProps()} {...geOptionalProps()} />
  ))
  .add("Single Button", () => (
    <Modal
      {...getRequiredProps()}
      {...geOptionalProps({
        primaryButton: PRIMARY_BUTTON_PROPS,
      })}
    />
  ))
  .add("Double Button", () => (
    <Modal
      {...getRequiredProps()}
      {...geOptionalProps({
        primaryButton: PRIMARY_BUTTON_PROPS,
        secondaryButton: SECONDARY_BUTTON_PROPS,
      })}
    />
  ));
