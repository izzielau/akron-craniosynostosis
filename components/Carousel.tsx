import * as React from "react";
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";

import Carousel from "react-native-snap-carousel";

export default class AngleCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          image: require("../assets/faces/left-side.png"),
          text: "Side (left)",
        },
        {
          image: require("../assets/faces/left-off-center.png"),
          text: "Face (left off-center)",
        },
        {
          image: require("../assets/faces/front.png"),
          text: "Face (front)",
        },
        {
          image: require("../assets/faces/right-off-center.png"),
          text: "Face (right off-center)",
        },
        {
          image: require("../assets/faces/right-side.png"),
          text: "Side (right)",
        },
        {
          image: require("../assets/faces/back.png"),
          text: "Back",
        },
        {
          image: require("../assets/faces/under.png"),
          text: "Under",
        },
        {
          image: require("../assets/faces/birdeye.png"),
          text: "Bird's eye view",
        },
        {
          image: require("../assets/faces/top-angled.png"),
          text: "Top (angled)",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "rebeccapurple",
          borderRadius: 5,
          height: 150,
          marginLeft: 15,
          marginRight: 15,
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

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            loop={true}
            sliderWidth={430} // needs to be relative to screen size in the future
            itemWidth={200}
            hasParallaxImages={true}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}

/*
https://github.com/meliorence/react-native-snap-carousel/blob/master/example/src/index.js
*/
