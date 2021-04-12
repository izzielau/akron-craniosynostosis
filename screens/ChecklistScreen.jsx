import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

const CONTENT = [
  {
    title: <Text>20-30 minutes</Text>,
    content: <Text>This whole process should take up to 30 minutes total. Keep in mind that an early time investment now will help later on.</Text>,
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


const ChecklistScreen = () => {
  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections) => {
    setActiveSections(
      sections.includes(undefined) ? [] : sections
    );
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[
          styles.header,
          isActive ? styles.active : styles.inactive
        ]}
        transition="backgroundColor">
        <Text style={styles.headerText}>
          {section.title}
        </Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[
          styles.content,
          isActive ? styles.active : styles.inactive
        ]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{textAlign: 'center'}}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
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
      </View>
  );
};

export default ChecklistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
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
});