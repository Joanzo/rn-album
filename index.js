/*
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('albums', () => App);
*/

// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';



// Create a component
// fetch: http://rallycoding.herokuapp.com/api/music_albums
const App = () => (
  <View>
    <Header headerText='Albums' />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
