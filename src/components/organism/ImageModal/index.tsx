import React from "react";
import {
  ImageBackground,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  View,
} from "react-native";
import RNModal from "react-native-modal";
import Button, { Props as ButtonProps } from "../../atoms/Button";
import Space from "../../atoms/Space";
import { allColors, borders } from "../../../symbols";
import IconButton from "../../atoms/IconButton";

const DIALOG_IN_ANIMATION_DURATION = 600;
const DIALOG_OUT_ANIMATION_DURATION = 600;

type Props = {
  isVisible: boolean;
  source?: string;
  onCancelPress?: () => any;
  onBackdropPress?: () => any;
  onModalHide?: () => any;
  onModalShow?: () => any;
  onSwipeComplete?: () => any;
  actionButton?: ButtonProps;
};

type Styles = {
  buttonsView: ViewStyle;
  modalView: ViewStyle;
  imageBackground: ViewStyle;
  image: ImageStyle;
};

/**
 * Stylize Modal
 */
const styles = StyleSheet.create<Styles>({
  buttonsView: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  modalView: {
    backgroundColor: allColors.darkBackground,
    borderRadius: borders.radius.round,
    flex: 1,
  },
  image: {
    borderRadius: borders.radius.round,
  },
  imageBackground: {
    flex: 1,
    alignItems: "flex-start",
  },
});

/**
 * ImageModal
 *
 * @param props - props
 *
 * Required:
 * @param props.isVisible - if the modal is visible or not
 *
 * Optional:
 * @param [props.onCancelPress] - callback fired when the cancel button is pressed
 * @param [props.onBackdropPress] - callback fired when the backdrop is pressed
 * @param [props.onModalHide] - callback fired when the modal is hidden
 * @param [props.onModalShow] - callback fired when the modal is shown
 * @param [props.onSwipeComplete] - callback fired when the modal is swiped away
 * @param [props.actionButton] - property of the primary button
 */
const ImageModal = (props: Props) => {
  const { actionButton, onCancelPress, source, ...otherProps } = props;
  return (
    <RNModal
      animationInTiming={DIALOG_IN_ANIMATION_DURATION}
      animationOutTiming={DIALOG_OUT_ANIMATION_DURATION}
      {...otherProps}
    >
      <View style={styles.modalView}>
        {!!source && (
          <ImageBackground
            style={styles.imageBackground}
            source={{ uri: source }}
            imageStyle={styles.image}
          >
            {!!onCancelPress && (
              <Space.Inset all="medium">
                <IconButton name="close" size="small" onPress={onCancelPress} />
              </Space.Inset>
            )}
          </ImageBackground>
        )}
      </View>
      <Space.Stack size="medium" />
      {!!actionButton && (
        <View style={styles.buttonsView}>
          <Button
            color="primary"
            size="medium"
            isStretched={true}
            type="clear"
            {...actionButton}
          />
        </View>
      )}
    </RNModal>
  );
};

export { Props };

export default ImageModal;
