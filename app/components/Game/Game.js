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
      selectedCards: [],
      sets: [],
      score: 0
    };
  }
  componentDidMount() {
    this.generateFirstCards();
  }
  generateFirstCards() {
    let cards = []
    do {
      cards = set.generateCards(9)
      console.log(set.getAllSets(cards))
    }
    while (set.getAllSets(cards).length < 1)
    this.setState({
      cards: cards,
      sets: set.getAllSets(cards)
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
          this.setState({
            score: this.state.score + 1
          })
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
    do {
      for(let card in this.state.selectedCards) {
        newCards[this.state.selectedCards[card]] = set.generateCards(1)[0]
      }
      console.log(set.getAllSets(newCards))
    }
    while (set.getAllSets(newCards).length < 1)
    this.setState({
      cards: newCards,
      selectedCards: [],
      sets: set.getAllSets(newCards)
    })
  }
  checkSet() {
    return set.isSet(this.state.cards, this.state.selectedCards)
  }
  render() {
    return (
      <View >
        <Text style={styles.score}>
          Score: {this.state.score}
        </Text>
        <View style={styles.cardContainer}>
          {this.renderCards()}
        </View>
        <Text style={styles.setCount}>
          Available sets: {this.state.sets.length}
        </Text>
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
    marginBottom: 10
  },
  setCount: {
    color: '#fff',
    marginRight: 5,
    textAlign: 'center',
    marginBottom: 50
  },
  score: {
    color: '#fff',
    margin: 5
  }
});

AppRegistry.registerComponent('Game', () => Game);
