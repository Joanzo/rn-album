/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = { loggedIn: null };


  componentDidMount() {
    console.log('Database Initialized');
    firebase.initializeApp({
      apiKey: 'AIzaSyDrCN9giZAixc4DRWPGx6AFUWdfcVfAyoY',
      authDomain: 'react-native-auth-e8b4c.firebaseapp.com',
      databaseURL: 'https://react-native-auth-e8b4c.firebaseio.com',
      projectId: 'react-native-auth-e8b4c',
      storageBucket: 'react-native-auth-e8b4c.appspot.com',
      messagingSenderId: '375375987380'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  userSignOut() {
    firebase.auth().signOut();
  }


  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <View flexDirection="row">
            <Button onPress={this.userSignOut.bind(this)}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        {this.renderContent()}
        <View style={styles.content}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
