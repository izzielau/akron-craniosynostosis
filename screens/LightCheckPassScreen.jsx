import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../constants/Styles";


export default function LightCheckPassScreen(props) {
  const { navigation } = props;
  return (
    <View style = {styles.lightcontainer}>
        
        <Text style={styles.headerText}>
            You're all set!
        </Text>
        <Text style={styles.bodyText}>
        Your current set-up looks great, now it’s time to start capturing all the right angles! 
        </Text>
        <View style={styles.row}>
          <Image
              style={[
                styles.box,
                {
                  top: 50,
               //   position: "relative",
                 // justifyContent: "flex-start"
                },
              ]}
              source={require('../assets/images-environment/smiley-face.png')}
          />
          <Image
               style={[
                styles.box,
                {
                  top: 120,
                  left: 20,
                  marginBottom: 300,
                //  position: "relative",
               //   justifyContent: "flex-end"
                },
              ]}
              source={require('../assets/images-environment/camera.png')}
          />
      </View>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Checklist")}
        >
        <Text style={styles.buttonText}>Start Photographing</Text>
        </TouchableOpacity>
    </View>
  );
}

