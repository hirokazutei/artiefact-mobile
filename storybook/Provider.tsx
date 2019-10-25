/* @flow */
import * as React from "react";
import { View } from "react-native";
import { colors } from "../src/symbols/colors";

const Provider = ({
  backgroundColor = colors.background,
  story
}: {
  backgroundColor?: string;
  story: () => React.ReactElement;
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor,
        padding: 40
      }}
    >
      {story()}
    </View>
  );
};
export default Provider;
