import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';

import AngleCarousel from "../components/Carousel";
import { Dimensions } from 'react-native';

export default function CameraView(props) {
  const { navigation } = props;

  const [hasPermission, setHasPermission] = useState(false);
  const [hasCameraRollPermission, setHasCameraRollPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [modalVisible, setModalVisible] = useState(false);

  const carouselItems = [
    {
      image: require("../assets/updated-faces/front.png"),
      text: "Front",
      overlay: require("../assets/overlays/front-overlay.png"),
    },
    {
      image: require("../assets/updated-faces/back.png"),
      text: "Back",
      overlay: require("../assets/overlays/center.png"),
    },
    {
      image: require("../assets/updated-faces/left-side.png"),
      text: "Left Side",
      overlay: require("../assets/overlays/sides.png"),
    },
    {
      image: require("../assets/updated-faces/right-side.png"),
      text: "Right Side",
      overlay: require("../assets/overlays/sides.png"),
    },
    {
      image: require("../assets/updated-faces/worms-eye.png"),
      text: "Worm's Eye",
      overlay: require("../assets/overlays/worm.png"),
    },
    {
      image: require("../assets/updated-faces/top-angled.png"),
      text: "Angled Top",
      overlay: require("../assets/overlays/top-angled.png"),
    },
    {
      image: require("../assets/updated-faces/top.png"),
      text: "Top",
      overlay: require("../assets/overlays/center.png"),
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
      const album = await MediaLibrary.getAlbumAsync(albumTitle)
      console.log(albumTitle)
      console.log(album)

      if (album === undefined || album === null) {
        console.log(albumTitle)
        MediaLibrary.createAlbumAsync(albumTitle, asset)
          .then(() => {
            console.log('Album created!');
          })
          .catch(error => {
            console.log('err', error);
          });
      } else {
        let assetAdded = await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camera}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("Introduction")}
        >
          <Text style={{color: "white"}}>Back to Tutorial</Text>
        </TouchableOpacity>
        <Image
          style={styles.guide}
          source={carouselItems[activeIndex].overlay}
        />
        <View style={styles.carouselContainer}>
          <AngleCarousel
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            carouselItems={carouselItems}
            // modalVisible={modalVisible}
            // setModalVisible={setModelVisible}
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
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gallery}
            onPress={() => navigation.navigate("Gallery")}
          >
            <Text style={{color: "white"}}>Gallery</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  camera: {
    height: "100%",
  },
  guide: {
    position: "absolute",
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 150,
    height: "50%",
    opacity: 0.5,
  },
  carouselContainer: {
    height: 150,
    alignSelf: "center",
    alignItems: "center",
    marginTop: Dimensions.get('window').height - 350,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginTop: 0,
    marginLeft: 50,
  },
  button: {
    height: 50,
    width: 50,
    marginLeft: 75,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
  },
  gallery: {
    height: 50,
    width: 100,
    marginLeft: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "#014590",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    height: 50,
    width: 150,
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "#014590",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
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