import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Inset from "../../atoms/Inset";
import SignIn from "../../organism/SignIn/index";

type Styles = {
  base: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: { flex: 1, flexDirection: "column", justifyContent: "center" }
});

const InitialPageTemplate: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.base}>
      <Inset paddingHorizontal="macro" paddingBottom="macro">
        <SignIn />
      </Inset>
    </View>
  );
};

export default InitialPageTemplate;
