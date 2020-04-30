import React from "react";
import { View } from "react-native";
import RNModal from "react-native-modal";
import Button, { ButtonProps } from "../../atoms/Button";
import Space from "../../atoms/Space";
import { stylizeModal } from "./styles";
import { Title } from "../../atoms/Text";

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
  title?: string;
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
 * @param [props.onBackButtonPress] - callback fired when the back button is pressed
 * @param [props.onBackdropPress] - callback fired when the backdrop is pressed
 * @param [props.onModalHide] - callback fired when the modal is hidden
 * @param [props.onModalShow] - callback fired when the modal is shown
 * @param [props.onSwipeComplete] - callback fired when the modal is swiped away
 * @param [props.primaryButton] - property of the primary button
 * @param [props.secondaryButton] - property of the secondary buton
 * @param [props.title] - the title of the modal
 *
 * Component:
 * @extends Button
 */
const Modal = (props: Props) => {
  const {
    children,
    primaryButton,
    secondaryButton,
    title,
    ...otherProps
  } = props;
  const styles = stylizeModal();
  const SecondaryButton = secondaryButton && (
    <View style={styles.buttonView}>
      <Button
        color="secondary"
        size="medium"
        isStretched={true}
        type="clear"
        {...secondaryButton}
      />
    </View>
  );
  const ModalButton = primaryButton && (
    <View style={styles.buttonsView}>
      {SecondaryButton}
      {SecondaryButton && <Space.Queue size="small" />}
      <View style={styles.buttonView}>
        <Button
          color="primary"
          size="medium"
          isStretched={true}
          type="clear"
          {...primaryButton}
        />
      </View>
    </View>
  );
  return (
    <RNModal
      animationInTiming={DIALOG_IN_ANIMATION_DURATION}
      animationOutTiming={DIALOG_OUT_ANIMATION_DURATION}
      {...otherProps}
    >
      <View style={styles.modalView}>
        <Space.Inset horizontal="medium" vertical="large">
          {!!title && (
            <View style={styles.titleView}>
              <Space.Inset horizontal="small" flex={1}>
                <Title size="small" align="center">
                  {title}
                </Title>
              </Space.Inset>
            </View>
          )}
          <Space.Inset horizontal="medium" vertical="medium">
            {children}
          </Space.Inset>
          {ModalButton}
        </Space.Inset>
      </View>
    </RNModal>
  );
};

export { Props as ModalProps };

export default Modal;
