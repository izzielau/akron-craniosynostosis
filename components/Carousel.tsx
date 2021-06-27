import React, { useState, useRef, useEffect } from "react";
import { Text, View, SafeAreaView, Image,TouchableOpacity, Button, ImageRequireSource} from "react-native";

import Carousel from "react-native-snap-carousel";
import { Dimensions } from 'react-native';
import Modal from 'react-native-modal';

type CarouselItem = { image: any, text: string }
type CarouselProps = { activeIndex: number, setActiveIndex: Function, carouselItems: CarouselItem[] }

export default function AngleCarousel(props: CarouselProps) {

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity onPress={toggleModal}>
          <View
            style={{
              backgroundColor: "transparent",
              height: 125,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                position: "absolute",
                marginTop: 10,
                marginLeft: 10,
                color: "white",
              }}
            >
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
        <Modal isVisible={modalVisible}>
          <View>
            <Image
              source={props.carouselItems[props.activeIndex].image}
              style={{
                width: "100%",
                height: "75%",
                position: "relative",
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                position: "absolute",
                marginTop: 20,
                marginLeft: 20,
                fontSize: 18,
                backgroundColor: "transparent",
                color: "white"
              }}
            >
              {props.carouselItems[props.activeIndex].text}
            </Text>
            <Button title="Close" onPress={toggleModal} color="white" />
          </View>
        </Modal>
      </View>
    );
  }

  return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            layout={"default"}
            data={props.carouselItems}
            loop={true}
            sliderWidth={Dimensions.get('window').width} // needs to be relative to screen size in the future
            itemWidth={125}
            hasParallaxImages={true}
            renderItem={renderItem}
            onSnapToItem={(index) => props.setActiveIndex(index)}
          />
        </View>
      </SafeAreaView>
  )
}

/*
https://github.com/meliorence/react-native-snap-carousel/blob/master/example/src/index.js
*/
