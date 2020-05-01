/* @flow */
import * as React from "react";
import { View } from "react-native";
import { allColors } from "../src/symbols";

const Provider = ({
  backgroundColor = allColors.background,
  story,
}: {
  backgroundColor?: string;
  story: () => React.ReactElement<null>;
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor,
        padding: 40,
      }}
    >
      {story()}
    </View>
  );
};
export default Provider;
