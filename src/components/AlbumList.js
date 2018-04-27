import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ 
          albums: responseData 
        });
        console.log(responseData);
      })
      .catch((error) => {
        console.error(error);
      });

  }


  render() {
    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  }
}

export default AlbumList;