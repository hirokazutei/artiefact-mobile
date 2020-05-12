// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Provider from "../../../../../storybook/Provider";
import { Props as ErrorModalProps } from "../component";
import { IconTypeKey } from "../../../atoms/Icon/const";
import ErrorModal from "../component";

const DEFAULT_PROPS: ErrorModalProps = {
  onPress: action("button-pressed"),
  message: "Sample Error Message",
};

const selectIcon: Array<IconTypeKey> = [
  "camera",
  "errorCircle",
  "noConnection",
  "successCircle",
  "warningCircle",
];

const getRequiredProps = (
  overrides: Partial<ErrorModalProps> = {}
): ErrorModalProps => {
  const { onPress, message } = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    onPress,
    message: text("Error Message", message),
  };
};

const geOptionalProps = (
  overrides: Partial<ErrorModalProps> = {}
): Partial<ErrorModalProps> => {
  const { icon, isVisible = true } = overrides;
  return {
    icon: select("Icon Options", selectIcon, icon),
    isVisible: boolean("Visible", isVisible),
  };
};

storiesOf("Organism/ErrorModal", module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ErrorModal {...getRequiredProps()} {...geOptionalProps()} />
  ));
