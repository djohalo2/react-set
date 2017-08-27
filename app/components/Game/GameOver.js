import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Modal from 'react-native-modal'

export default class ReactSet extends Component {
  render() {
    return (
      <View>
        <Modal isVisible={this.props.modalVisible} backdropOpacity={0.8}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>GAME OVER</Text>
            <Text style={[styles.title, styles.score]}>{this.props.score}</Text>
            <Button
              color="#e74c3c"
              onPress={() => {
                  this.props.restartGame()
                }
              }
              title="RETRY"
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#fff',
    margin: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalContainer: {
    flex: 1,
    marginTop: 50
  },
  score: {
    fontSize: 50,
    margin: 15
  }
});

AppRegistry.registerComponent('ReactSet', () => ReactSet);
