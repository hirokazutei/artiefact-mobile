// components/Hello.tsx
import React from "react";
import { StyleSheet, View } from "react-native";
import store from "./redux/configureStore";
import Button from "./components/atoms/button";
import Inset from "./components/atoms/inset";
import InputField from "./components/atoms/inputField";
import Outset from "./components/atoms/outset";
import Text from "./components/atoms/text";

export interface Props {}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center"
  }
});
export default class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <Inset padding={72}>
          <Outset marginBottom={50}>
            <Text size="macro" color="primary" weight="thicc" align="center">
              Artiefact
            </Text>
          </Outset>
          <Outset marginBottom={30}>
            <InputField placeholder="Username" />
          </Outset>
          <Outset marginBottom={30}>
            <InputField placeholder="Password" secureTextEntry={true} />
          </Outset>

          <Button size="massive" color="primary">
            Login
          </Button>
        </Inset>
      </View>
    );
  }
}
