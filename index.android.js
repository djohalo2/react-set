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
          REACT NATIVE SET
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
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('ReactSet', () => ReactSet);
