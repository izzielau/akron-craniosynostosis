import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";

export default function ContrastScreen(props) {
  const { navigation } = props;

  // Style & return the view.
  return (
    <View style={styles.tutorialContainer}>
        <View style={styles.imageView}>
            <Image
                style={styles.image}
                source={require('../assets/tutorial/image-4.png')}
            />
        </View>
        <View style={styles.tutorialTextContainer}>
            <Text style={styles.headerText}>
            Make sure you have proper contrast between your background and your infant.
            </Text>
            <Text style={styles.bodyText}>
            Ideally, choose a background that is dissimilar from the clothes, hair, and skin color of your infant. 
            This will allow the doctors will be able to clearly identify your infant's skull shape.
            </Text>
        </View>
        <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.whiteButton}
              onPress={() => navigation.navigate("Solid Background")}
            >
              <Text style={styles.whiteButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.longButton}
              onPress={() => navigation.navigate("Camera")}
            >
              <Text style={styles.buttonText}>Begin Photographing</Text>
            </TouchableOpacity>
            {/* 
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Camera")}
            >
              <Text style={styles.buttonText}>Evaluate Studio</Text>
            </TouchableOpacity>
            */}
        </View>
    </View>
  );
}