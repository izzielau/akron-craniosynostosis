import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";
import { SafeAreaView, StyleSheet } from 'react-native'
import CarouselCards from '../components/CarouselCards.jsx'

export default function IntroductionScreen(props) {
  const { navigation } = props;

  // Style & return the view.
  return (
    <View style={styles.tutorialContainer}>
        <View style={styles.imageView}>
            <SafeAreaView style={styles.carouselContainer}>
            {/* <SafeAreaView>  */}
              <CarouselCards />
            </SafeAreaView>
            {/* <Image
                style={styles.image}
                source={require('../assets/tutorial/filler.jpg')}
            /> */}
        </View>
        <View style={styles.tutorialTextContainer}>
            <Text style={styles.headerText}>
                Let’s walk through some best practices for taking pictures.
            </Text>
            <Text style={styles.bodyText}>
                We’ll provide an overview of the angles we’ll ask you to capture and what an ideal photography environment looks like.
                Once you’re all set up, we’ll evaluate your at-home photography studio.
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
              onPress={() => navigation.navigate("Viewpoints")}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
