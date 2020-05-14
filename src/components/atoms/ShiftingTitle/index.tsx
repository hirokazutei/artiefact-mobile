import React from "react";
import { Animated } from "react-native";
import { ThemePalette } from "react-native-kinpaku-ui";
import { getRandomUserTitle } from "../../../helper/wording";
import { UserTitle } from "../../../constants/messages";
import { Title } from "../Text";

const ANIMATION_DURATION = 1500;
const ANIMATION_START_OFFSET = -4;

type Props = { color?: keyof ThemePalette; _storyshots?: boolean };

type ComponentState = {
  title: UserTitle;
  fadeAnim: Animated.Value;
  titleUpdate?: void;
};

// TODO: Turn it into functional component
/**
 * ShiftingTitle
 *
 * @param props - properties
 *
 * Optional:
 *
 * @param props.color
 */
class ShiftingTitle extends React.Component<Props, React.ComponentState> {
  state: ComponentState = {
    title: this.props._storyshots ? "Traveller" : getRandomUserTitle(),
    fadeAnim: new Animated.Value(-2),
  };

  fadeInNew() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: ANIMATION_DURATION,
    }).start(() => this.fadeOutNew());
  }

  fadeOutNew() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: ANIMATION_DURATION,
    }).start();
  }

  componentDidMount() {
    this.fadeInNew();
    this.setState({
      titleUpdate: setInterval(() => {
        this.setState({ fadeAnim: new Animated.Value(ANIMATION_START_OFFSET) });
        this.fadeInNew();
        this.setState({
          title: getRandomUserTitle(this.state.title),
        });
      }, ANIMATION_DURATION * 3),
    });
  }

  componentWillUnmount() {
    if (!!this.state.titleUpdate) {
      clearInterval(this.state.titleUpdate);
    }
  }

  render() {
    const { fadeAnim, title } = this.state;
    const { color = "primary" } = this.props;
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <Title numberOfLines={1} color={color}>
          {title}
        </Title>
      </Animated.View>
    );
  }
}

export { Props };

export default ShiftingTitle;
