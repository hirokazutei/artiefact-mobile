import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Title } from "../Text";

type Props = {
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
    alignItems: "center",
  },
});

/**
 * NavigationTitle
 *
 * @param props - properties
 *
 * Required:
 * @param props.children - children
 */
const NavigationTitle = (props: Props) => {
  const { children } = props;
  return (
    <View style={styles.view}>
      <Title size="small" numberOfLines={1}>
        {children}
      </Title>
    </View>
  );
};

export { Props };

export default NavigationTitle;
