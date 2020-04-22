import React from "react";
import {
  NavigationScreenProps,
  HeaderBackButton,
  withNavigation,
} from "react-navigation";

type NavigationBackButtonProps = {
  onPress?: () => void;
};

class NavigationBackButton extends React.Component<
  NavigationBackButtonProps & NavigationScreenProps<any>
> {
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

export { NavigationBackButtonProps };

export default withNavigation(NavigationBackButton);
