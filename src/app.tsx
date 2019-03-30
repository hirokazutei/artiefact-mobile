// components/Hello.tsx
import React from "react";
import store from "./redux/configureStore";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/atoms/button";
import InputField from "./components/atoms/inputField";

export interface Props {}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flexDirection: "column",
    padding: 40,
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
        <InputField placeholder="Username" />
        <InputField placeholder="Password" />

        <Button size="massive" color="primary">
          Login
        </Button>
      </View>
    );
  }
}
