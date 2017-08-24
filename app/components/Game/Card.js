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
        return (
          <Circle
            cx="55"
            cy="55"
            r="45"
            fill={card.fill == 'full' ? card.color : 'white'}
            strokeWidth={card.fill !== 'full' ? 4 : 0}
            stroke={card.color}
          />
        )
      case 'rectangle':
        return (
          <Rect
            x="12.5"
            y="12.5"
            width="85"
            height="85"
            fill={card.fill == 'full' ? card.color : 'white'}
            strokeWidth={card.fill !== 'full' ? 4 : 0}
            stroke={card.color}
          />
        )
      case 'triangle':
        return (
          <Polygon
            points="55,10 100,100 10,100"
            fill={card.fill == 'full' ? card.color : 'white'}
            strokeWidth={card.fill !== 'full' ? 4 : 0}
            stroke={card.color}
          />
        )
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
