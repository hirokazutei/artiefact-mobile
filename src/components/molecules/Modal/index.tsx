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
  children: React.ReactNode;
  isVisible: boolean;
  onBackButtonPress?: () => any;
  onBackdropPress?: () => any;
  onModalHide?: () => any;
  onModalShow?: () => any;
  onSwipeComplete?: () => any;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
};

/**
 * Modal
 *
 * @param props - props
 *
 * Required:
 * @param props.children - the content displayed in modal
 * @param props.isVisible - if the modal is visible or not
 *
 * Optional:
 * @param [props.avoidKeyboard] - if the modal avoids keyboard or not
 * @param [onBackButtonPress] - callback fired when the back button is pressed
 * @param [onBackdropPress] - callback fired when the backdrop is pressed
 * @param [onModalHide] - callback fired when the modal is hidden
 * @param [onModalShow] - callback fired when the modal is shown
 * @param [onSwipeComplete] - callback fired when the modal is swiped away
 * @param [primaryButton] - property of the primary button
 * @param [secondaryButton] - property of the secondary buton
 *
 * Component:
 * @extends Button
 */
const Modal = (props: Props) => {
  const { children, primaryButton, secondaryButton, ...otherProps } = props;
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
      {...otherProps}
    >
      <View style={styles.modalView}>
        <Space.Inset all="medium">
          {children}
          {PrimaryButton}
        </Space.Inset>
      </View>
    </RNModal>
  );
};

export { Props as ModalProps };

export default Modal;
