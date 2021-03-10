import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";

export default function SubmissionScreen(props) {
  const { navigation } = props;

  // Style & return the view.
  return (
    <View style={styles.tutorialTextContainer}>
        <Text style={styles.tutorialHeaderText}>
            Great job!
        </Text>
        <Text style={styles.tutorialBodyText}>
            All your photos have been saved to your device’s camera roll, both
            as individual images (one for each view) and a collage with all
            7 images in a single file.
        </Text>
        <Text style={styles.tutorialBodyTextBold}>
            Submissions might happen in the following ways:
        </Text>
        <Text style={styles.tutorialBodyText}>
            1. If your healthcare team uses MyChart, photos can be uploaded via the mobile app.
        </Text>
        <Text style={styles.tutorialBodyText}>
            2. Your healthcare team may use a different electronic medical record,
            each of which has its own patient portal for accessing their medical
            records (examples: athenaCommunicator, HealtheLife, Greenway Patient
            Portal, FollowMyHealth). Your provider may recommend using a specific platform.
        </Text>
        <Text style={styles.tutorialBodyText}>
            3. Emailing your provider the photos directly may also be an alternative.
        </Text>
    </View>
  );
}
