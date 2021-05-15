import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';

import AngleCarousel from "../components/Carousel";

export default function CameraView(props) {
  const { navigation } = props;

  const [hasPermission, setHasPermission] = useState(false);
  const [hasCameraRollPermission, setHasCameraRollPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      image: require("../assets/faces/front.png"),
      text: "Front",
    },
    {
      image: require("../assets/faces/back.png"),
      text: "Back",
    },
    {
      image: require("../assets/faces/left-side.png"),
      text: "Left Side",
    },
    {
      image: require("../assets/faces/right-side.png"),
      text: "Right Side",
    },
    {
      image: require("../assets/faces/under.png"),
      text: "Under",
    },
    {
      image: require("../assets/faces/top-angled.png"),
      text: "Top",
    },
    {
      image: require("../assets/faces/birdeye.png"),
      text: "Bird's eye view",
    },
  ]

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      console.log("setting hasPermission to ", status === 'granted')

      const rollPermissions = await MediaLibrary.requestPermissionsAsync();
      setHasCameraRollPermission(rollPermissions.status === 'granted');
      console.log("setting camera roll permission to ", rollPermissions.status === 'granted')
    })();
  }, []);

  const camera = useRef();

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePictureAndCreateAlbum = async () => {
    if (camera.current) {
      const data = await camera.current.takePictureAsync()
        .catch(error => console.log('error', error));
      console.log(data);
      
      const asset = await MediaLibrary.createAssetAsync(data.uri);
      const albumTitle = carouselItems[activeIndex].text;
      console.log(albumTitle);

      MediaLibrary.createAlbumAsync(albumTitle, asset)
        .then(() => {
          console.log('Album created!');
        })
        .catch(error => {
          console.log('err', error);
        });
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camera}>
        <Image
          style={styles.guide}
          source={require("../assets/head-guide.png")}
        />
        <View style={styles.carouselContainer}>
          <AngleCarousel
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            carouselItems={carouselItems}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>
            hasPermission && hasCameraRollPermission
              ? takePictureAndCreateAlbum()
              : console.log('Permissions not granted', hasPermission, hasCameraRollPermission)
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