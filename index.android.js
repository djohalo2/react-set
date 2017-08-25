import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Game from './app/components/Game/Game';

export default class ReactSet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native Set
        </Text>
        <Game />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1B2A'
  },
  title: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#fff'
  }
});

AppRegistry.registerComponent('ReactSet', () => ReactSet);
