import React from "react";
import {
  NavigationScreenProps,
  HeaderBackButton,
  withNavigation
} from "react-navigation";

type Props = {
  onPressBack?: () => void;
};

class BackButton extends React.Component<Props & NavigationScreenProps<any>> {
  render() {
    const { onPressBack, navigation } = this.props;
    const onPress = () => {
      navigation.goBack();
      if (onPressBack) {
        onPressBack();
      }
    };
    return <HeaderBackButton onPress={onPress} />;
  }
}

export default withNavigation(BackButton);
