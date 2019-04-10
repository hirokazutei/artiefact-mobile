import React from "react";
import { Animated, Text } from "react-native";
import { getRandomUserTitle } from "../../../helper/wording";
import { stylizeText, StyleProps } from "./styles";

type Props = { children?: never } & StyleProps;

export default class ShiftingTitle extends React.Component<
  Props,
  React.ComponentState
> {
  state = {
    title: getRandomUserTitle(),
    fadeAnim: new Animated.Value(-1)
  };

  fadeInNew() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1500
    }).start();
  }

  componentDidMount() {
    this.fadeInNew();
    setInterval(() => {
      this.setState({ fadeAnim: new Animated.Value(-3) });
      this.fadeInNew();
      this.setState({ title: getRandomUserTitle(this.state.title) });
    }, 3000);
  }

  render() {
    const styles = stylizeText(this.props);
    return (
      <Animated.View style={[styles.base, { opacity: this.state.fadeAnim }]}>
        <Text
          style={styles.text}
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          allowFontScaling={false}
        >
          {this.state.title}
        </Text>
      </Animated.View>
    );
  }
}
