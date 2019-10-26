import React from "react";
import { View } from "react-native";
import RNModal from "react-native-modal";
import Button, { ButtonProps } from "../../atoms/Button";
import Space from "../../atoms/Space";
import { stylizeModal } from "./styles";

const DIALOG_IN_ANIMATION_DURATION = 600;
const DIALOG_OUT_ANIMATION_DURATION = 600;

type Props = {
  avoidKeyboard?: boolean;
  children: Array<React.ReactElement> | React.ReactElement;
  isVisible: boolean;
  onBackButtonPress?: () => any;
  onBackdropPress?: () => any;
  onModalHide?: () => any;
  onModalShow?: () => any;
  onSwipeComplete?: () => any;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
};

const Modal: React.FC<Props> = (props: Props): React.ReactElement => {
  const {
    avoidKeyboard,
    children,
    isVisible,
    onBackButtonPress,
    onBackdropPress,
    onModalHide,
    onModalShow,
    onSwipeComplete,
    primaryButton,
    secondaryButton
  } = props;
  const styles = stylizeModal();
  const SecondaryButton = secondaryButton && (
    <View style={styles.buttonView}>
      <Button color="secondary" size="huge" {...secondaryButton} />
    </View>
  );
  const PrimaryButton = primaryButton && (
    <Space.Inset all="medium">
      <View style={styles.buttonsView}>
        {SecondaryButton}
        {SecondaryButton && <Space.Queue size="medium" />}
        <View style={styles.buttonView}>
          <Button color="primary" size="huge" {...primaryButton} />
        </View>
      </View>
    </Space.Inset>
  );
  return (
    <RNModal
      animationInTiming={DIALOG_IN_ANIMATION_DURATION}
      animationOutTiming={DIALOG_OUT_ANIMATION_DURATION}
      avoidKeyboard={avoidKeyboard}
      isVisible={isVisible}
      onBackButtonPress={onBackButtonPress ? onBackButtonPress : () => {}}
      onBackdropPress={onBackdropPress ? onBackdropPress : () => {}}
      onModalHide={onModalHide ? onModalHide : () => {}}
      onModalShow={onModalShow ? onModalShow : () => {}}
      onSwipeComplete={onSwipeComplete ? onSwipeComplete : () => {}}
    >
      <View style={styles.modalView}>
        {children}
        {PrimaryButton}
      </View>
    </RNModal>
  );
};

export default Modal;
