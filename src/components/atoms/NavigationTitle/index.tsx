import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Title } from "../Text";

export type Props = {
  children: Required<string>;
};

type Styles = {
  view: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

/**
 * NavigationTitle
 *
 * @param props - properties
 * @param props.children - children
 */
const NavigationTitle: React.FC<Props> = (props: Props): React.ReactElement => {
  const { children } = props;
  return (
    <View style={styles.view}>
      <Title
      //allowFontScaling={false}
      //adjustsFontSizeToFit={true}
      //accessibilityLabel={children}
      //numberOfLines={1}
      >
        {children}
      </Title>
    </View>
  );
};

export default NavigationTitle;
