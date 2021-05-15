import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, FlatList, Dimensions } from "react-native";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";
import * as MediaLibrary from 'expo-media-library';

export default function GalleryView(props) {
  const { navigation } = props;

  const numColumns = 2;
  
  const [angles] = useState([
    {title: 'Front', key: '1', image: null},
    {title: 'Back', key: '2', image: null},
    {title: 'Left Side', key: '3', image: null},
    {title: 'Right Side', key: '4', image: null},
    {title: "Worm's Eye", key: '5', image: null},
    {title: 'Top', key: '6', image: null},
    {title: 'Top Angled', key: '7', image: null},
    // {title: 'Angle 8', key: '8', image: ''},
  ]);

  useEffect(() => {
    angles.forEach((item) => {
      (async () => {
        const album = await MediaLibrary.getAlbumAsync(item.title);
        const res = await MediaLibrary.getAssetsAsync({ album });
        item.image = res.assets;
      })();
    })});

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate("Folder", {
        title: item.title
      })}
    >
      <Image
        style={styles.galleryFolder} 
        source={ item.image } 
      />
      <View style={[styles.button, {position: 'absolute', top: Dimensions.get('window').height / 40, left: 35, backgroundColor: 'rgba(240, 240, 247, 0.75)', width: Dimensions.get('window').width / 3.5, height: Dimensions.get('window').height / 25}]}>
        <Text style={[styles.buttonText, {color: 'black'}]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
  
  const numCompleted = 44;
  const status = "Complete";

  // Style & return the view.
  return (
    <View style={[styles.container, {justifyContent: 'flex-start'}]}>
      <Text style={[styles.bodyText, {marginTop: 10, marginBottom: 0}]}>
        {"Tap on a folder to view pictures taken for that specific angle. You'll have the opton to retake pictures of necessary."}
      </Text>

      <Text style={[styles.bodyText, {marginTop: 10, marginBottom: 0, alignItems: 'flex-end'}]}>
        {numCompleted} Pictures {'\u25CF'} {status}
      </Text>

      <FlatList
        data={angles}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={numColumns}
        scrollEnabled={false}
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
