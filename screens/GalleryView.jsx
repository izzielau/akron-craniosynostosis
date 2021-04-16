import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, FlatList, Dimensions } from "react-native";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";

export default function GalleryView(props) {
  const { navigation } = props;

  const numColumns = 2;
  
  const [angles] = useState([
    {title: 'Angle 1', key: '1'},
    {title: 'Angle 2', key: '2'},
    {title: 'Angle 3', key: '3'},
    {title: 'Angle 4', key: '4'},
    {title: 'Angle 5', key: '5'},
    {title: 'Angle 6', key: '6'},
    {title: 'Angle 7', key: '7'},
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
