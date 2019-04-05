// components/Hello.tsx
import React from "react";
import { StyleSheet, View } from "react-native";
import store from "./redux/configureStore";
import SignInPage from "./components/pages/SignInPage/index";
import * as symbols from "./symbols";

export interface Props {}

const styles = StyleSheet.create({
  root: {
    backgroundColor: symbols.colors.white,
    flex: 1
  }
});
export default class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <SignInPage />
      </View>
    );
  }
}
