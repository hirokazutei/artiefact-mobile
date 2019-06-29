import React from "react";
import Modal from "../../molecules/Modal";
import Text from "../../atoms/Text";
import Inset from "../../atoms/Inset";

type Props = {
  onPress: () => void;
  isVisible: boolean;
  message: string;
};

export default class ErrorModal extends React.Component<Props> {
  render() {
    const { message, isVisible, onPress } = this.props;
    return (
      <Modal
        isVisible={isVisible}
        primaryButton={{
          onPress: onPress,
          label: "OK"
        }}
      >
        <Inset padding="huge">
          <Text size="huge">{message}</Text>
        </Inset>
      </Modal>
    );
  }
}
