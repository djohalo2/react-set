import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Svg,{
    Circle,
    Line,
    Polygon,
    Polyline,
    Rect
} from 'react-native-svg';

import * as cardImages from '../../utils/cardImages';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      card: {},
      selected: false
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
  onCardClick = (card) => {
    console.log(this.state.selected)
    console.log(card.color + ' ' + card.shape + ' ' + card.fill)
    this.setState({
      selected: !this.state.selected
    }, () => {
      console.log(this.state.selected)
    })
  }
  cardStyle = () => {
    console.log('Changing card style based on ' + this.state.selected)
    return !this.state.selected ? [styles.row, styles.rowUnselected] : [styles.rowSelected, styles.row]
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => this.onCardClick(this.state.card)}>
        <View style={this.cardStyle()}>
          <Svg
            height="110"
            width="110"
          >
          {this.generateCardImage(this.state.card)}
          </Svg>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    width:110,
    height: 110,
    margin: 5,
    justifyContent: 'center',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#415A77'
  },
  rowUnselected: {
    backgroundColor: '#1B263B'
  },
  rowSelected: {
    backgroundColor: '#415A77'
  },
  rowText: {
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('Card', () => Card);
