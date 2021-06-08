// This import is necessary for any file containing a React component
import React from "react";

// These imports are part of our navigation package, React Navigation
// https://reactnavigation.org/docs/getting-started
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Our project has two screens: HomeScreen and GameScreen
// Thus, we import both of these screens
import HomeScreen from "./screens/HomeScreen";
import ChecklistScreen from "./screens/ChecklistScreen";
import IntroductionScreen from "./screens/IntroductionScreen";
import ViewpointsScreen from "./screens/ViewpointsScreen";
import SolidBackgroundScreen from "./screens/SolidBackgroundScreen";
import ContrastScreen from "./screens/ContrastScreen";
import SubmissionScreen from "./screens/SubmissionScreen";
import CameraView from "./screens/CameraView";
import GalleryView from "./screens/GalleryView";
import FolderView from "./screens/FolderView";
import { Asset } from "expo-asset";
import { StatusBar } from 'react-native';

// To initialize and style our Navigation Stack, we call the default methods
// https://reactnavigation.org/docs/hello-react-navigation
const Stack = createStackNavigator();
const StackOptions = { headerTitleStyle: { fontFamily: "Avenir" } };
const NoHeader = { headerTitleStyle: { fontFamily: "Avenir" }, headerShown: false };

// Loading all images for quick use (eliminates lag problem)
// https://docs.expo.io/versions/latest/sdk/asset/
// Asset.loadAsync(require("./assets/name.png"));

// This is the default entry point of our application
// This function returns JSX: a tree-like structure of React components
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={NoHeader}
          name="Akron Children's Hospital"
          component={HomeScreen}
        />
        <Stack.Screen
          options={NoHeader}
          name="Checklist"
          component={ChecklistScreen}
        />
        <Stack.Screen
          options={NoHeader}
          name="Introduction"
          component={IntroductionScreen}
        />
        <Stack.Screen
          options={NoHeader}
          name="Viewpoints"
          component={ViewpointsScreen}
        />
        <Stack.Screen
          options={NoHeader}
          name="Solid Background"
          component={SolidBackgroundScreen}
        />
        <Stack.Screen
          options={NoHeader}
          name="Contrast"
          component={ContrastScreen}
        />
        <Stack.Screen
          options={NoHeader}
          name="Camera"
          component={CameraView}
        />
        <Stack.Screen
          options={StackOptions}
          name="Gallery"
          component={GalleryView}
        />
        <Stack.Screen
          options={StackOptions}
          name="Folder"
          component={FolderView}
        />
        <Stack.Screen
          options={NoHeader}
          name="Submission"
          component={SubmissionScreen}
        />
      </Stack.Navigator>
      <StatusBar barStyle={'dark-content'}/>
    </NavigationContainer>
  );
}
