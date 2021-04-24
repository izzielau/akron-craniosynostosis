import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";

export default function SolidBackgroundScreen(props) {
  const { navigation } = props;

  // Style & return the view.
  return (
    <View style={styles.tutorialContainer}>
      <View style={styles.imageView}>
          <Image
              style={styles.image}
              source={require('../assets/tutorial/image-3.png')}
          />
      </View>
      <View style={styles.tutorialTextContainer}>
          <Text style={styles.headerText}>
              A solid background significantly improves the quality of photos.
          </Text>
          <Text style={styles.bodyText}>
              We recommend finding a wall with a solid color for your photography
              environnment. Unable to find an empty wall? That’s okay! You can also
              use bedsheets to create a space with a solid background.
          </Text>
      </View>
      
      
      <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.whiteButton}
              onPress={() => navigation.navigate("Viewpoints")}
            >
              <Text style={styles.whiteButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Contrast")}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
