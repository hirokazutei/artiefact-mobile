import React from "react";
import { Animated } from "react-native";
import { textFactory, ThemePalette } from "react-native-kinpaku-ui";
import { getRandomUserTitle } from "../../../helper/wording";
import { UserTitle } from "../../../constants/messages";
import { themes } from "../../../symbols";
import { textVariation } from "./const";

const ANIMATION_DURATION = 1500;
const ANIMATION_START_OFFSET = -4;

export type Props = { color: keyof ThemePalette };

type ComponentState = {
  title: UserTitle;
  fadeAnim: Animated.Value;
  titleUpdate?: void;
};

const { ShiftingTitle: ShiftingTitleComponent } = textFactory<
  typeof themes,
  null,
  typeof textVariation,
  null,
  false
>({
  themes,
  textVariations: textVariation
});

export default class ShiftingTitle extends React.Component<
  Props,
  React.ComponentState
> {
  state: ComponentState = {
    title: getRandomUserTitle(),
    fadeAnim: new Animated.Value(-2)
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
    const { fadeAnim, title } = this.state;
    const { color } = this.props;
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <ShiftingTitleComponent
          //adjustsFontSizeToFit={true}
          //numberOfLines={1}
          //allowFontScaling={false}
          color={color}
        >
          {title}
        </ShiftingTitleComponent>
      </Animated.View>
    );
  }
}
