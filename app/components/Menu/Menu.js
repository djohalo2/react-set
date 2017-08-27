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
        <Text style={styles.menuTitle}>REACT SET</Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate('Game')
          }
          title="PLAY GAME"
          color="#e74c3c"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    padding: 50,
    paddingTop: 100,
    backgroundColor: '#0D1B2A',
    flex: 1
  },
  menuTitle: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 50
  }
});

AppRegistry.registerComponent('Menu', () => Menu);
