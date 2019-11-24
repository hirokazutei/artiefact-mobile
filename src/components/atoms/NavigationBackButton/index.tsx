import React from "react";
import {
  NavigationScreenProps,
  HeaderBackButton,
  withNavigation
} from "react-navigation";

export type Props = {
  onPress?: () => void;
};

class BackButton extends React.Component<Props & NavigationScreenProps<any>> {
  render() {
    const { onPress, navigation } = this.props;
    const onPressBack = () => {
      navigation.goBack();
      if (onPress) {
        onPress();
      }
    };
    return <HeaderBackButton onPress={onPressBack} />;
  }
}

export default withNavigation(BackButton);
