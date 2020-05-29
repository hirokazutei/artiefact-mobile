// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { boolean, object, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Provider from "../../../../../storybook/Provider";
import ImageModal, { Props as ImageModalProps } from "../index";
import { Props as ButtonProps } from "../../../atoms/Button";
import { sampleSource } from "./const";

const DEFAULT_PROPS: ImageModalProps = {
  source: sampleSource,
  isVisible: true,
};

const DEFAULT_ACTION_BUTTON: ButtonProps = {
  onPress: action("primary-button-pressed"),
  label: "A Button",
};

const getRequiredProps = (
  overrides: Partial<ImageModalProps> = {}
): ImageModalProps => {
  const { isVisible, source } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    isVisible: boolean("Visible", isVisible),
    source: source,
  };
};

const geOptionalProps = (
  overrides: Partial<ImageModalProps> = {}
): Partial<ImageModalProps> => {
  const { actionButton } = overrides;
  return {
    onCancelPress: action("cancel-pressed"),
    onBackdropPress: action("backdrop-pressed"),
    onModalHide: action("modal-hidden"),
    onModalShow: action("modal-shown"),
    onSwipeComplete: action("swiped"),
    actionButton: object("Action Button", actionButton),
  };
};
storiesOf("Organism/ImageModal", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ImageModal
      {...getRequiredProps()}
      {...geOptionalProps({
        actionButton: DEFAULT_ACTION_BUTTON,
      })}
    />
  ));
