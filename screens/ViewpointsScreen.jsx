import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";

export default function IntroductionScreen(props) {
  const { navigation } = props;

  // Style & return the view.
  return (
    <View style={styles.tutorialContainer}>
        <View style={styles.imageView}>
            <Image
                style={styles.tutorialImage}
                source={require('../assets/tutorial/filler.jpg')}
            />
        </View>
        <View style={styles.tutorialTextContainer}>
            <Text style={styles.tutorialHeaderText}>
                We’ll need to capture 9 viewpoints of your child’s head.
            </Text>
            <Text style={styles.tutorialBodyText}>
                Swipe through for examples of all the angles. Don’t worry, we’ll
                also provide these examples and guidance when you take the pictures.
            </Text>
        </View>
        <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.whiteButton}
              onPress={() => navigation.navigate("Camera")}
            >
              <Text style={styles.whiteButtonText}>Skip Tutorial</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Solid Background")}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
