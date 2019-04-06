// components/Hello.tsx
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import store from "./redux/configureStore";
import SignInPage from "./components/pages/SignInPage/index";
import * as symbols from "./symbols";

type Style = {
  root: ViewStyle;
};

const styles: Style = StyleSheet.create<Style>({
  root: {
    backgroundColor: symbols.colors.white,
    flex: 1
  }
});
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <SignInPage />
      </View>
    );
  }
}
