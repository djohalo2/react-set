import React, { Component } from 'react';
import _ from 'lodash';
import * as set from '../../utils/set';
import { NavigationActions } from 'react-navigation'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Card from './Card';
import GameOver from './GameOver'

export default class Game extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.changeSelectedCards = this.changeSelectedCards.bind(this)
    this.restartGame = this.restartGame.bind(this)
    this.state = {
      cards: [],
      selectedCards: [],
      sets: [],
      score: 0,
      gameState: 'playing',
      time: 10
    };
    this.baseState = this.state
  }
  componentDidMount() {
    this.generateFirstCards()
    this.startTimer()
  }
  restartGame() {
    console.log('Restarting game...')
    this.setState(this.baseState)
    this.generateFirstCards()
    this.setState({
      selectedCards: []
    })
    this.startTimer()
    console.log('Selected cards: ' + this.state.selectedCards)
  }
  generateFirstCards = () => {
    let cards = []
    do {
      cards = set.generateCards(9)
    }
    while (set.getAllSets(cards).length < 1)
    this.setState({
      cards: cards,
      sets: set.getAllSets(cards)
    });
  }
  renderCards() {
    return this.state.cards.map((card, index) => {
      let selected = this.state.selectedCards.includes(index) ? true : false
      return (
        <Card key={card.shape + card.color + card.fill + index} selected={selected} shape={card.shape} color={card.color} fill={card.fill} cardIndex={index} changeSelected={this.changeSelectedCards}/>
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
            score: this.state.score + 1,
            time: this.state.time + 5
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
  startTimer() {
    this.timer = setInterval(() => {
      if(this.state.gameState == 'playing' && this.state.time > 0) {
        this.setState({
          time: this.state.time - 1
        })
      } else {
        this.stopGame()
      }
    }, 1000);
  }
  stopGame() {
    clearInterval(this.timer);
    this.setState({
      gameState: 'stopped'
    })
  }
  checkSet() {
    return set.isSet(this.state.cards, this.state.selectedCards)
  }
  isModalVisible() {
    return this.state.gameState == 'stopped' ? true : false
  }

  resetStack() {
    console.log('Resetting stack...')
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Menu'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
    this.stopGame()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          REACT NATIVE SET!
        </Text>
        <GameOver modalVisible={this.isModalVisible()} restartGame={this.restartGame} score={this.state.score}/>
        <View style={styles.topTextContainer}>
          <Text style={styles.score}>
            Score: {this.state.score}
          </Text>
          <Text style={styles.timer}>
            Time: {this.state.time}
          </Text>
        </View>
        <View style={styles.cardContainer}>
          {this.renderCards()}
        </View>
        <Text style={styles.setCount}>
          Available sets: {this.state.sets.length}
        </Text>
        <Button
          onPress={() => this.resetStack()}
          title="STOP"
          color="#e74c3c"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1B2A'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 30,
    color: '#fff',
    textAlign: 'center'
  },
  cardContainer: {
    flexDirection:'row',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  setCount: {
    color: '#fff',
    marginRight: 5,
    textAlign: 'center',
    marginBottom: 40
  },
  score: {
    color: '#fff',
    margin: 5,
    flex: 0.9
  },
  timer: {
    color: '#fff',
    margin: 5,
    textAlign: 'right'
  },
  topTextContainer: {
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('Game', () => Game);
