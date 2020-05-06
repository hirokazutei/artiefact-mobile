/* @flow */
import * as React from "react";
import { View } from "react-native";
import { allColors } from "../src/symbols";

const Provider = ({
  backgroundColor = allColors.background,
  fullPage = false,
  story,
}: {
  backgroundColor?: string;
  fullPage?: boolean;
  story: () => React.ReactElement<null>;
}) => {
  return (
    <View
      style={
        fullPage
          ? { flex: 1 }
          : {
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor,
              padding: 40,
            }
      }
    >
      {story()}
    </View>
  );
};

export default Provider;
