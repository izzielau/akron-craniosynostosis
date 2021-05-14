import React, { useState, useRef, useEffect } from "react";
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";

import Carousel from "react-native-snap-carousel";
import { Dimensions } from 'react-native';

// Todo: find type for image and replace any
type CarouselItem = { image: any, text: string }
type CarouselProps = { activeIndex: number, setActiveIndex: Function, carouselItems: CarouselItem[] }

export default function AngleCarousel(props: CarouselProps) {

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "rebeccapurple",
          borderRadius: 5,
          height: 100,
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
            marginTop: 5,
            marginLeft: 5,
          }}
        >
          {item.text}
        </Text>
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
            itemWidth={100}
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
