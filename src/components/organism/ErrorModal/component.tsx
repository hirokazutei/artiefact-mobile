import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Modal from "../../molecules/Modal";
import { SubHeading } from "../../atoms/Text";
import Space from "../../atoms/Space";
import Icon from "../../atoms/Icon";
import { IconTypeKey } from "../../atoms/Icon/const";

type Props = {
  onPress: () => void;
  message: string;
  icon?: IconTypeKey;
  isVisible?: boolean;
};

type Styles = {
  iconView: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  iconView: {
    alignSelf: "center",
  },
});

class ErrorModal extends React.Component<Props> {
  render() {
    const { message, icon, isVisible, onPress } = this.props;
    return (
      <Modal
        isVisible={!!isVisible}
        primaryButton={{
          onPress: onPress,
          label: "OK",
        }}
      >
        <Space.Inset top="huge" horizontal="huge">
          <SubHeading size="large">{message}</SubHeading>
          {icon && (
            <View style={styles.iconView}>
              <Space.Stack size="large" />
              <Icon name={icon} size="macro" color="primary" />
            </View>
          )}
        </Space.Inset>
      </Modal>
    );
  }
}

export { Props };

export default ErrorModal;
