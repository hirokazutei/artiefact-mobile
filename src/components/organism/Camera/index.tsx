"use strict";
import React, { useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { RNCamera } from "react-native-camera";
import IconButton from "../../atoms/IconButton";
import { Label } from "../../atoms/Text";
import Space from "../../atoms/Space";

type Styles = {
  buttonContainer: ViewStyle;
  camera: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  camera: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
  },
});

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "lightgreen",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Label>Waiting</Label>
  </View>
);

const Camera = () => {
  const [camera, setCamera] = useState(RNCamera.Constants.Type.front);
  const changeCamera = () => {
    if (camera === RNCamera.Constants.Type.front) {
      setCamera(RNCamera.Constants.Type.back);
    } else {
      setCamera(RNCamera.Constants.Type.front);
    }
  };
  // @ts-ignore: Implicit Any for this library
  const takePicture = async function(camera) {
    console.log(camera);

    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data);
    console.log(data.uri);
  };

  return (
    <RNCamera
      style={styles.camera}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title: "Permission to use camera",
        message: "We need your permission to use your camera",
        buttonPositive: "Ok",
        buttonNegative: "Cancel",
      }}
      androidRecordAudioPermissionOptions={{
        title: "Permission to use audio recording",
        message: "We need your permission to use your audio",
        buttonPositive: "Ok",
        buttonNegative: "Cancel",
      }}
    >
      {({ camera, status }) => {
        if (status !== "READY") return <PendingView />;
        return (
          <View style={styles.buttonContainer}>
            <Space.Inset all="large">
              <IconButton
                onPress={() => takePicture(camera)}
                name="image"
                type="outline"
                // FIXME: KAZ Should be a generic black color
                color="text"
                size="small"
              />
            </Space.Inset>
            <Space.Inset all="large">
              <IconButton
                onPress={() => takePicture(camera)}
                name="camera"
                type="outline"
                // FIXME: KAZ Should be a generic black color
                color="text"
              />
            </Space.Inset>
            <Space.Inset all="large">
              <IconButton
                onPress={() => changeCamera}
                name="rotate"
                type="outline"
                // FIXME: KAZ Should be a generic black color
                color="text"
                size="small"
              />
            </Space.Inset>
          </View>
        );
      }}
    </RNCamera>
  );
};

export default Camera;

//RMCamera.Constants.FlashMode.off/on/auto
