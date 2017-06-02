// index.ios.js - place code in here for IOS!!!!!
// Starting with what instructor is doing for now. 

// Import a library to help create a component 
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
  <Text>Some Text</Text>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);