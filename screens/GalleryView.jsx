import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, FlatList, Dimensions } from "react-native";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";

export default function GalleryView(props) {
  const { navigation } = props;

  const numColumns = 2;
  
  const [angles] = useState([
    {title: 'Front', key: '1'},
    {title: 'Back', key: '2'},
    {title: 'Left Side', key: '3'},
    {title: 'Right Side', key: '4'},
    {title: "Worm's Eye", key: '5'},
    {title: 'Top', key: '6'},
    {title: 'Top Angled', key: '7'},
    {title: 'Angle 8', key: '8'},
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.galleryFolder}
      onPress={() => navigation.navigate("Folder", {
        title: item.title
      })}
    >
      <Text style={styles.bodyText}>{item.title}</Text>
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
      />

      <TouchableOpacity
        style={[styles.button, {marginBottom: 13}]}
        onPress={() => navigation.navigate("Submission")}
      >
        <Text style={styles.buttonText}>I'm Done</Text>
      </TouchableOpacity>
    </View>
  );
}
