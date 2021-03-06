import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";

export default function ViewpointsScreen(props) {
  const { navigation } = props;

  // Style & return the view.
  return (
    <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.buttonText}>Skip Tutorial</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Solid Background")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
    </View>
  );
}
