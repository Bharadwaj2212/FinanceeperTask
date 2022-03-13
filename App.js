/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeScreen';
import SelfieScreen from './src/Selfie';
import CurrentLocation from './src/CurrentLocation';
import JSONDisplay from './src/JSONDisplay';
import APIData from './src/APICall';


const Tab = createBottomTabNavigator();

// function APICallScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>API Call Screen!!</Text>
//     </View>
//   );
// }


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Selfie" component={SelfieScreen} />
      <Tab.Screen name="CurrentLoc" component={CurrentLocation} />
      <Tab.Screen name="JSONDisplay" component={JSONDisplay} />
      <Tab.Screen name="APIData" component={APIData} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
