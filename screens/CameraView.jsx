import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";

export default function CameraView(props) {
  const { navigation } = props;

  // Style & return the view.
  return (
    <View>
        <TouchableOpacity
          style={styles.gallery}
          onPress={() => navigation.navigate("Gallery")}
        >
        </TouchableOpacity>
    </View>
  );
}
