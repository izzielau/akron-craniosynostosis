import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Content,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

const CONTENT = [
  {
    title: '20-30 minutes',
    content: 'This whole process should take up to 30 minutes total.',
  },
  {
    title: 'Yourself and an assistant',
    content: 'Taking good photos of your infant is a 2-person job. To be successful, one person should hold the baby while the other takes pictures. ',
  },
  {
    title: 'A well-lit room',
    content: 'Natural lighting significantly improve photo quality, but a good indoor lighting is also fine.',
  },
  {
    title: 'Solid background',
    content: 'A solid background is helpful to provide that makes the image clear enough for proper evaluation. Finding a blank wall or hanging up a bedsheet might work in some cases. \n\nMake sure there aren’t any lights or windows in the background that could ruin the shot.',
  },
  {
    title: 'Towel or blanket',
    content: 'Wrapping the baby, like when using a haircut cape, in a solid colored blanket may help with some top-down views',
  },

  {
    title: 'Water',
    content: 'If baby has a lot of hair, wetting it or taking pictures after a bath will make their skull shape easier to see.',
  },
  {
    title: 'Patience',
    content: "Lastly, patience. We recognize that infants aren't known for cooperating, but encourage you to make the best effort now so we can provide the most accurate evaluation.",
  },
];


const ChecklistScreen = (props) => {
  const { navigation } = props;
  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections) => {
    setActiveSections(
      sections.includes(undefined) ? [] : sections
    );
  };

  const renderHeader = (section, _, isActive) => {
    
    return (
      <View 
        duration={400}
        style={[
          styles.header,
          isActive ? styles.active : styles.inactive
        ]}
        transition="backgroundColor">
       
          <Icon style={styles.icons}
          name={isActive ? 'minus' : 'plus'}
          type='ant'
          color='black'
        />
        <Text style={styles.headerText}>
        {section.title}
        </Text>
      </View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <View
        duration={400}
        style={[
          styles.content,
          isActive ? styles.active : styles.inactive
        ]}
        transition="backgroundColor">
        <Text
          style={styles.content}>
          {section.content}
        </Text>
      </View>
    );
  };

  return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            What will you need?
          </Text>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Introduction")} 
          >
            <Text style={styles.buttonText}>I'm Ready</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default ChecklistScreen;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: '10%',
  },
  title: {
    fontFamily: 'Avenir',
    textAlign: 'left',
    fontSize: 26,
    fontWeight: '700',
    marginLeft: 20,
    marginBottom: 20,
  },
  header: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    flex: 1
  },
  headerText: {
    fontFamily: 'Avenir',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
    
  },
  icons: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15
  },
  content: {
    width: '90%',
    height: '100%',
    fontFamily: 'Avenir',
    textAlign: 'left',
    marginLeft: 25,
    marginRight: 20,
    fontSize: 16
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
    textAlign: 'center',
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
  button: {
    height: 50,
    width: 250,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#014590",
  },
  buttonText: {
    fontFamily: "Avenir",
    fontWeight: "700",
    fontSize: 16,
    color: "white",
    alignItems: "center",
  },
});