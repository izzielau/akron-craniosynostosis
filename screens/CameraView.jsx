import React, { useState,  useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";

import AngleCarousel from "../components/Carousel";

// import { styles } from "../constants/Styles";
import { shuffle } from "../utils/ArrayUtils";
import { withSafeAreaInsets } from "react-native-safe-area-context";
//import { white } from "ansicolors";

export default function CameraView(props) {
  const { navigation } = props;

  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // Style & return the view.
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <Image
          style={styles.guide}
          source={require("../assets/head-guide.png")}
        />
        <View style={styles.carouselContainer}>
          <AngleCarousel />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={require("../assets/camera-capture.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gallery}
            onPress={() => navigation.navigate("Gallery")}
          >
        </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  guide: {
    flex: 2,
    marginTop: '30%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
  },
  instructions: {
    color: 'white',
    textAlign: 'center',
    marginTop: '7%'
  },
  carouselContainer: {
    marginTop: '7%',
    height: 125,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 0.5,
    backgroundColor: "transparent",
    margin: 20,
  },
  button: {
    flex: 0.5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  gallery: {
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: "white",
  }
});

/* code for flipping camera
<TouchableOpacity
  style={styles.button}
  onPress={() => {
    setType(
    type === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    );
  }}
>
<Text style={styles.text}> Flip </Text>
*/