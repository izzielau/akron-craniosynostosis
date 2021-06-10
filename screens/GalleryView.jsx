import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { styles } from "../constants/Styles";
import { useEffect, useRef } from "react";
import * as MediaLibrary from 'expo-media-library';

export default function GalleryView(props) {
  const { navigation } = props;

  const numColumns = 2;
  const firstRender = useRef(true);
  const [changeAngles, setChangeAngles] = useState(null);

  function returnColor(length) {
    return length === 0? '#E1506A' : 'transparent'
  }
  
  const [angles] = useState([
    {title: 'Front', key: '1', image: null, length: 0},
    {title: 'Back', key: '2', image: null, length: 0},
    {title: 'Left Side', key: '3', image: null, length: 0},
    {title: 'Right Side', key: '4', image: null, length: 0},
    {title: "Worm's Eye", key: '5', image: null, length: 0},
    {title: 'Top', key: '6', image: null, length: 0},
    {title: 'Top Angled', key: '7', image: null, length: 0},
  ]);

  useEffect(() => {
    angles.forEach((item) => {
      (async () => {
        const album = await MediaLibrary.getAlbumAsync(item.title);
        const res = await MediaLibrary.getAssetsAsync({ album });
        if (album !== null && album !== undefined && item.length !== res.assets.length) {
          item.image = res.assets;
          item.length = res.assets.length;
          setChangeAngles(res);
        }
      })();
    })
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate("Folder", {
        title: item.title,
        key: item.key
      })}
    >
      <Image
        style={styles.galleryFolder} 
        source={ item.image } 
      />
      <View style={[styles.button, {position: 'absolute', top: Dimensions.get('window').height / 40, left: Dimensions.get('window').width / 10.5, backgroundColor: returnColor(item.length), width: Dimensions.get('window').width / 3.5, height: Dimensions.get('window').height / 25}]}>
        <Text style={[styles.buttonText, {color: 'white'}]}>{item.length === 0 ? "0 photos" : ""}</Text>
      </View>

      <View style={[styles.button, {position: 'flex', marginTop: 0, left: Dimensions.get('window').width / 10.5, backgroundColor: 'transparent', width: Dimensions.get('window').width / 3.5, height: Dimensions.get('window').height / 25}]}>
        <Text style={[styles.buttonText, {color: 'black'}]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
    
  )
  
  // const numCompleted = 44;
  // const status = "Complete";

  // Style & return the view.
  return (
    <View style={[styles.container, {justifyContent: 'flex-start'}]}>
      <Text style={[styles.bodyText, {marginTop: 10, marginBottom: 5}]}>
        {"Tap on a folder to view pictures taken for that specific angle. You'll have the opton to retake pictures of necessary."}
      </Text>

      {/* <Text style={[styles.bodyText, {marginTop: 10, marginBottom: 0, alignItems: 'flex-end'}]}>
        {numCompleted} Pictures {'\u25CF'} {status}
      </Text> */}

      <FlatList
        data={angles}
        extraData={changeAngles}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={numColumns}
        scrollEnabled={true}
        style={{marginTop: Dimensions.get('window').height / 100}}
      />

      <TouchableOpacity
        style={[styles.button, {margin: Dimensions.get('window').height / 80}]}
        onPress={() => navigation.navigate("Submission")}
      >
        <Text style={styles.buttonText}>I'm Done</Text>
      </TouchableOpacity>
    </View>
  );
}
