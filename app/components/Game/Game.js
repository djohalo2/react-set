import React, { Component } from 'react';
import _ from 'lodash';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Button
} from 'react-native';

import Card from './Card';

export default class Game extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      cardsDataSource: ds,
      cards: []
    };
  }
  componentDidMount() {
    this.generateRandomCards();
  }
  generateRandomCards() {
    let cards = [];
    const colors = ['blue', 'red', 'yellow'];
    const shapes = ['circle', 'rectangle', 'triangle'];
    const fills = ['full', 'striped', 'empty'];

    for (let i = 1; i <= 9; i++) {
      let card = {
        color: colors[_.random(0, 2)],
        shape: shapes[_.random(0, 2)],
        fill: fills[_.random(0, 2)],
      }
      cards.push(card);
    }

    this.setState({
      cards: cards,
      cardsDataSource: this.state.cardsDataSource.cloneWithRows(cards)
    });
  }

  renderRow(card, sectionId, rowId, highlightRow) {
    return (
      <Card card={card}/>
    )
  }
  render() {
    return (
      <View >
        <ListView
          contentContainerStyle={styles.cardContainer}
          dataSource={this.state.cardsDataSource}
          renderRow={this.renderRow.bind(this)}
        />
        <Button
          onPress={this.generateRandomCards}
          title="Generate"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection:'row',
    flexWrap: 'wrap'
  }
});

AppRegistry.registerComponent('Game', () => Game);
