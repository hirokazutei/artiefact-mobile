import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Modal from "../../molecules/Modal";
import Text from "../../atoms/Text";
import Inset from "../../atoms/Inset";
import Icon from "../../atoms/Icon";
import { IconTypes } from "../../atoms/Icon";
import Stack from "../../atoms/Stack";

type Props = {
  onPress: () => void;
  isVisible: boolean;
  message: string;
  icon?: IconTypes;
};

type Styles = {
  iconView: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  iconView: {
    alignSelf: "center"
  }
});

export default class ErrorModal extends React.Component<Props> {
  render() {
    const { message, icon, isVisible, onPress } = this.props;
    return (
      <Modal
        isVisible={isVisible}
        primaryButton={{
          onPress: onPress,
          label: "OK"
        }}
      >
        <Inset top="huge" horizontal="huge">
          <Text size="huge">{message}</Text>
          {icon && (
            <View style={styles.iconView}>
              <Stack size="large" />
              <Icon name={icon} size={"macro"} color={"primary"} />
            </View>
          )}
        </Inset>
      </Modal>
    );
  }
}
