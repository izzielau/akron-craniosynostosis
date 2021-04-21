import * as React from "react";
import { Text, View, SafeAreaView, Image,TouchableOpacity, Button } from "react-native";

import Carousel from "react-native-snap-carousel";
import { Dimensions } from 'react-native';
import Modal from 'react-native-modal';

export default class AngleCarousel extends React.Component<{}, { modalVisible: boolean, activeIndex: number, carouselItems: object}> {
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
      modalVisible: false
    };
  }

  toggleModal = () => { 
    this.setState({modalVisible: !this.state.modalVisible});
  }

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity onPress={this.toggleModal}>
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
        </TouchableOpacity>
        <Modal isVisible={this.state.modalVisible}>
          <View>
            <Image
              source={this.state.carouselItems[this.state.activeIndex].image}
              style={{
                width: "100%",
                height: "75%",
                position: "relative",
                borderRadius: 5,
              }}
            />
            <Button title="Close" onPress={this.toggleModal} color="white" />
          </View>
        </Modal>
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
            sliderWidth={Dimensions.get('window').width} // needs to be relative to screen size in the future
            itemWidth={100}
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
