import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import * as cardImages from '../../utils/cardImages';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      card: {}
    };
  }
  componentDidMount() {
    this.setState({
      card: this.props.card
    })
    console.log(this.state.card)
  }
  generateCardImage(card) {
    switch(card.shape) {
      case 'circle':
        return cardImages.circle(card)
      case 'rectangle':
        return cardImages.rectangle(card)
      case 'triangle':
        return cardImages.triangle(card)
    }
  }
  onCardClick(card) {
    console.log(card.color + ' ' + card.shape + ' ' + card.fill)
  }
  render() {
    return (
      <TouchableHighlight onPress={() => this.onCardClick(this.state.card)}>
        <View style={styles.row}>
          <Svg
            height="110"
            width="110"
          >
          {this.generateCardImage(this.state.card)}
          </Svg>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    width:110,
    height: 110,
    margin: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#D3D3D3'
  },
  rowText: {
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('Card', () => Card);
