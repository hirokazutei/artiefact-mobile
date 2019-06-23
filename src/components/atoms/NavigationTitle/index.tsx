import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { textWeights, textSizes } from "../../../symbols/text";

type Props = {
  children: Required<string>;
};

type Styles = {
  view: ViewStyle;
  text: TextStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: { fontWeight: textWeights.bold, fontSize: textSizes.large }
});

/**
 * Text
 *
 * @param props - properties
 * @param props.children - children
 */
const NavigationTitle: React.FC<Props> = (props: Props): React.ReactElement => {
  const { children } = props;
  return (
    <View style={styles.view}>
      <Text
        style={styles.text}
        allowFontScaling={false}
        adjustsFontSizeToFit={true}
        accessibilityLabel={children}
        numberOfLines={1}
      >
        {children}
      </Text>
    </View>
  );
};

export default NavigationTitle;
