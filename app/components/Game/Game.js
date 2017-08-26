import React, { Component } from 'react';
import _ from 'lodash';
import * as set from '../../utils/set';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Card from './Card';

export default class Game extends Component {
  constructor() {
    super();
    this.changeSelectedCards = this.changeSelectedCards.bind(this)
    this.state = {
      cards: [],
      selectedCards: []
    };
  }
  componentDidMount() {
    this.generateFirstCards();
  }
  generateFirstCards() {
    this.setState({
      cards: set.generateCards(9)
    });
  }
  renderCards() {
    return this.state.cards.map((card, index) => {
      return (
        <Card key={card.shape + card.color + card.fill + index} shape={card.shape} color={card.color} fill={card.fill} cardIndex={index} changeSelected={this.changeSelectedCards}/>
      )
    })
  }
  changeSelectedCards(index, isSelected) {
    let selected = this.state.selectedCards
    if(isSelected) {
      selected.push(index)
    } else {
      selected.splice(selected.indexOf(index), 1)
    }
    this.setState({
      selectedCards: selected
    }, () => {
      if(this.state.selectedCards.length == 3) {
        if(this.checkSet()) {
          this.removeCards()
        } else {
          this.setState({
            selectedCards: []
          })
        }
      }
    })
  }
  removeCards() {
    let newCards = this.state.cards
    for(let card in this.state.selectedCards) {
      newCards[this.state.selectedCards[card]] = set.generateCards(1)[0]
    }
    this.setState({
      cards: newCards,
      selectedCards: []
    })
  }
  checkSet() {
    return set.isSet(this.state.cards, this.state.selectedCards)
  }
  render() {
    return (
      <View >
        <View style={styles.cardContainer}>
          {this.renderCards()}
        </View>
        <Button
          onPress={() => this.checkSet()}
          title="Generate"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection:'row',
    flexWrap: 'wrap',
    marginBottom: 100
  }
});

AppRegistry.registerComponent('Game', () => Game);
