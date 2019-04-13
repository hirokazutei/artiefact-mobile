import React from "react";
import { View } from "react-native";
import RNModal from "react-native-modal";
import Button, { Props as ButtonProps } from "../../atoms/Button";
import Inset from "../../atoms/Inset";
import Spacing from "../../atoms/Spacing";
import { stylizeModal } from "./styles";

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
  return (
    <RNModal
      animationInTiming={600}
      animationOutTiming={600}
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
        {primaryButton && (
          <Inset padding="medium">
            <View style={styles.buttonsView}>
              {secondaryButton && (
                <View style={styles.buttonView}>
                  <Button color="secondary" size="huge" {...secondaryButton} />
           `     </View>
              )}
              {secondaryButton && <Spacing width="medium" />}
              <View style={styles.buttonView}>
                <Button color="primary" size="huge" {...primaryButton} />
              </View>
            </View>
          </Inset>
        )}
      </View>
    </RNModal>
  );
};

export default Modal;
