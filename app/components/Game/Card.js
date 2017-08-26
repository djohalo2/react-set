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
      shape: '',
      color: '',
      fill: '',
      cardIndex: 0,
      selected: false
    };
  }
  componentDidMount() {
    this.setState({
      shape: this.props.shape,
      color: this.props.color,
      fill: this.props.fill,
      cardIndex: this.props.cardIndex
    })
  }
  generateCardImage() {
    let card = {
      shape: this.state.shape,
      color: this.state.color,
      fill: this.state.fill
    }
    switch(this.state.shape) {
      case 'circle':
        return cardImages.circle(card)
      case 'rectangle':
        return cardImages.rectangle(card)
      case 'triangle':
        return cardImages.triangle(card)
    }
  }
  onCardClick = () => {
    console.log(this.state.color + ' ' + this.state.shape + ' ' + this.state.fill)
    console.log('MY INDEX: ' + this.state.cardIndex)
    this.setState({
      selected: !this.state.selected
    }, () => {
      this.props.changeSelected(this.state.cardIndex, this.state.selected)
    })
  }
  cardStyle = () => {
    return !this.state.selected ? [styles.row, styles.rowUnselected] : [styles.rowSelected, styles.row]
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => this.onCardClick()}>
        <View style={this.cardStyle()}>
          <Svg
            height="110"
            width="110"
          >
          {this.generateCardImage()}
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
