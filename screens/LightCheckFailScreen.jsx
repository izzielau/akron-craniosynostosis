import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../constants/Styles";


export default function LightCheckFailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.lightcontainer}>
        
        <Text style={styles.headerText}>
            Could be better
        </Text>
        <Text style={styles.bodyText}>
        Your current set-up is okay, but we’ll be able to evaluate your pictures better if you try to implement the following changes:
        </Text>
        
            <View style = {styles.failrow}>
                <Image style={styles.lightCheckFailbox} source={require('../assets/images-environment/lightbulb.png')}/>
                <Text style = {styles.titleText}>
            Move to a brighter room.
                </Text>
            </View>
            <View style = {styles.failrow}>
                <Image style={styles.lightCheckFailbox} source={require('../assets/images-environment/grayrectangle.png')}/>
                <Text style = {styles.titleText}>
                Find a solid backdrop.
                </Text>
            </View>

            <View style = {styles.failrow}>
                <Image style={styles.lightCheckFailbox} source={require('../assets/images-environment/sun.png')}/>
                <Text style = {styles.titleText}>
                Move to a room with more natural lighting.
                </Text>
            </View>
       
      <TouchableOpacity
        style={styles.whiteButton}
        onPress={() => navigation.navigate("Checklist")}
        >
        <Text style={styles.whiteButtonText}>Retake Environment</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LightCheckPass")}
        >
        <Text style={styles.buttonText}>Start Photographing</Text>
        </TouchableOpacity>
    </View>
  );
}

