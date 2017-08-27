import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Menu extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.menu}>
        <Button
          onPress={() =>
            this.props.navigation.navigate('Game')
          }
          title="PLAY"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    padding: 50,
    paddingTop: 100,
    backgroundColor: '#0D1B2A'
  }
});

AppRegistry.registerComponent('Menu', () => Menu);
