import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import CameraView from './CameraView';
export default function TabOneScreen() {
  const [cameraOn, setCameraOn] = useState(false)

  /* possibly use react-navigation in the future */
  if(cameraOn){
    return (<CameraView />);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity
          onPress={()=>{
            setCameraOn(true)
          }}
          style={{
            width: 130,
            borderRadius: 4,
            backgroundColor: '#14274e',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Take picture
          </Text>
        </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
