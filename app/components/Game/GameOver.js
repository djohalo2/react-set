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
        <Modal isVisible={this.props.modalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>GAME OVER</Text>
            <Button
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
    margin: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalContainer: {
    flex: 1,
    marginTop: 50
  }
});

AppRegistry.registerComponent('ReactSet', () => ReactSet);
