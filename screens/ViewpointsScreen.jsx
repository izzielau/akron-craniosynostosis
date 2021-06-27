import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";


export default function IntroductionScreen(props) {
  const { navigation } = props;

  const images = [
    require("../assets/updated-faces/front.png"),
    require("../assets/updated-faces/back.png"),
    require("../assets/updated-faces/left-side.png"),
    require("../assets/updated-faces/right-side.png"),
    require("../assets/updated-faces/worms-eye.png"),
    require("../assets/updated-faces/top.png"),
    require("../assets/updated-faces/top-angled.png"),
  ]

  const imageWidth = Dimensions.get('window').width;

  const renderItem = ({ item }) => (
    <Image 
        style={styles.image} 
        source={item} 
    />
  )

  // Style & return the view.
  return (
    <View style={styles.tutorialContainer}>
        <View style={styles.viewpointView}>
          <Carousel
            data={images}
            renderItem={renderItem}
            sliderWidth={imageWidth}
            itemWidth={imageWidth}
            layout={'default'}
            layoutCardOffset={0}
          />
        </View>
        <View style={styles.tutorialTextContainer}>
            <Text style={styles.headerText}>
                We’ll need to capture seven viewpoints of your child’s head.
            </Text>
            <Text style={styles.bodyText}>
                Swipe through for examples of all the angles. Don’t worry, we’ll
                also provide these examples and guidance when you take the pictures.
            </Text>
        </View>
        <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.whiteButton}
              onPress={() => navigation.navigate("Introduction")}
            >
              <Text style={styles.whiteButtonText}>Previous</Text>
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
