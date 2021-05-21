import React, { useState,  useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';

export default function EvaluationView(props) {
  const { navigation } = props;

  const [hasPermission, setHasPermission] = useState(false);
  const [hasCameraRollPermission, setHasCameraRollPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const camera = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      console.log("setting hasPermission to ", status === 'granted')

      const rollPermissions = await MediaLibrary.requestPermissionsAsync();
      console.log(rollPermissions);

      setHasCameraRollPermission(rollPermissions.status === 'granted');
      console.log("setting camera roll permission to ", rollPermissions.status === 'granted')
    })();
  }, []);

  const takePictureAndNavigate = async () => {
    if (camera.current) {
      const data = await camera.current.takePictureAsync()
        .catch(error => console.log('error', error));
      console.log(data);

      navigation.navigate("LightCheckPass")
      
    }
  }

  // Style & return the view.
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camera}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() =>
              hasPermission && hasCameraRollPermission
                ? takePictureAndNavigate()
                : console.log('Permissions not granted', hasPermission, hasCameraRollPermission)
            }
          >
            <Image source={require("../assets/camera-capture.png")} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "blue"
  },
  camera: {
    height: "100%",
  },
  buttonContainer: {
    height: "90%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  button: {
  },
});