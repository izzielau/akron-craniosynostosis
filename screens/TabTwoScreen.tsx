import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const CONTENT = [
  {
    title: '20-30 minutes',
    content: 'This whole process should take up to 30 minutes total. Keep in mind that an early time investment now will help later on.',
  },
  {
    title: 'Yourself and an assistant',
    content: 'It takes two people to successfully take all the pictures for this application, so make sure you have someone to help you. ',
  },
  {
    title: 'A well-lit room',
    content: 'Natural lighting significantly improves photo quality',
  },
  {
    title: 'Solid background',
    content: 'A solid background is helpful to provide that makes the image clear enough for proper evaluation. Finding a blank wall or hanging up a bedsheet might work in some cases.',
  },
  {
    title: 'Towel or blanket',
    content: 'Wrapping the baby in a blanket can help with some top-down views ',
  },

  {
    title: 'Water',
    content: 'If baby has a lot of hair, wetting it will make their skull shape easier to see.',
  },
  {
    title: 'Patience',
    content: "Lastly, patience. We recognize that infants aren't known for cooperating, but encourage you to make the best effort now so we can provide the most accurate evaluation.",
  },
];

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
  },
];

export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style ={styles.content} >
        {section.content}
        </Text>
      </View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <View><Text style = {{color: '#9A9AB0', fontSize: 18, padding: 15, fontWeight: '700'}}>What will you need?</Text></View>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
};



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 5,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 5,
  },
  headerText: {
    fontFamily: 'Roboto-Bold',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '700',
    padding: 10,
    color: 'rgba(104,107,126,1)',

  },
content: {
color: 'rgba(154,154,176,1)',
fontWeight: '700',
fontSize: 16,
padding:20,
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
