import React from "react";
import { StyleSheet, View } from "react-native";
import Inset from "../../atoms/Inset";
import SignIn from "../../organism/SignIn/index";

const styles = StyleSheet.create({
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
