import React from "react";
import { Animated, Text } from "react-native";
import { getRandomUserTitle } from "../../../helper/wording";
import { stylizeText, StyleProps } from "./styles";
import { UserTitle } from "../../../constants/messages";

const ANIMATION_DURATION = 1500;
const ANIMATION_START_OFFSET = -3;

type Props = { children?: never } & StyleProps;

type ComponentState = {
  title: UserTitle;
  fadeAnim: Animated.Value;
  titleUpdate?: void;
};

export default class ShiftingTitle extends React.Component<
  Props,
  React.ComponentState
> {
  state: ComponentState = {
    title: getRandomUserTitle(),
    fadeAnim: new Animated.Value(-1)
  };

  fadeInNew() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: ANIMATION_DURATION
    }).start();
  }

  componentDidMount() {
    this.fadeInNew();
    this.setState({
      titleUpdate: setInterval(() => {
        this.setState({ fadeAnim: new Animated.Value(ANIMATION_START_OFFSET) });
        this.fadeInNew();
        this.setState({ title: getRandomUserTitle(this.state.title) });
      }, ANIMATION_DURATION * 2)
    });
  }

  componentWillUnmount() {
    if (!!this.state.titleUpdate) {
      clearInterval(this.state.titleUpdate);
    }
  }

  render() {
    const styles = stylizeText(this.props);
    const { fadeAnim, title } = this.state;
    return (
      <Animated.View style={[styles.base, { opacity: fadeAnim }]}>
        <Text
          style={styles.text}
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          allowFontScaling={false}
        >
          {title}
        </Text>
      </Animated.View>
    );
  }
}
