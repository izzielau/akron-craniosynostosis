import React, { useState,  useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';

import AngleCarousel from "../components/Carousel";

// import { styles } from "../constants/Styles";
import { shuffle } from "../utils/ArrayUtils";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { white } from "ansi-colors";

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

  state = {
    rollGranted: false,
    cameraGranted: false,
  };

  function componentDidMount() {
    this.getCameraPermissions();
  };

  async function getCameraPermissions() {
    const { Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      this.setState({ cameraGranted: true });
    } else {
      this.setState({ cameraGranted: false });
      console.log('Uh oh! The user has not granted us permission.');
    }
    this.getCameraRollPermissions();
  };

  async function getCameraRollPermissions() {
    const { Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
    } else {
      /// Handle permissions denied;
      console.log('Uh oh! The user has not granted us permission.');
    }
  };

  takePictureAndCreateAlbum = async () => {
    const { uri } = await Camera.takePictureAsync();
    console.log('uri', uri);
    const asset = await MediaLibrary.createAssetAsync(uri);
    MediaLibrary.createAlbumAsync('Expo', asset)
      .then(() => {
        console.log('Album created!');
      })
      .catch(error => {
        console.log('err', error);
      });
  }

  async function takePicture() {
    const photo = async () => {
      try {
          const options = { quality: 0.5, base64: true };
          const data = await Camera.takePictureAsync(options);
          
          console.log(data.uri, '<<<<<<<<<<<<<<<<<<<<<');
      } catch (error) {
          console.log(error, "ERROR <<<<<<<<<<<<<")
      }
    };

    console.log(photo)
    console.log("hello")
  }

  // Style & return the view.
  // camera button woo
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
          <TouchableOpacity 
          style={styles.button}
          // onPress={() => takePicture()}
          onPress={() =>
            this.state.rollGranted && this.state.cameraGranted
              ? this.takePictureAndCreateAlbum()
              : console.log('Permissions not granted')
          }
          >
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