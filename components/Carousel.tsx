import * as React from 'react';
import {
    Text, 
    View,
    SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class AngleCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 150,
              padding: 50,
              marginLeft: 15,
              marginRight: 15, }}>
            <Text style={{fontSize: 10}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center' }}>
                <Carousel
                  layout={'default'}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  loop={true}
                  sliderWidth={430} // needs to be relative to screen size in the future
                  itemWidth={200}
                  hasParallaxImages={true}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

/*
https://github.com/meliorence/react-native-snap-carousel/blob/master/example/src/index.js
*/
