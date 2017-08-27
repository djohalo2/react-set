import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router } from './app/router';

export default class ReactSet extends Component {
  render() {
    return (
      <Router />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ReactSet', () => ReactSet);
