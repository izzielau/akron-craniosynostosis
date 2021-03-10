import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";

export default function ChecklistScreen(props) {
  const { navigation } = props;

  // Style & return the view.
  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Introduction")}
        >
          <Text style={styles.buttonText}>I'm ready!</Text>
        </TouchableOpacity>
    </View>
  );
}
