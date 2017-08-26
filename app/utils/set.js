import _ from 'lodash';
import * as combinations from './combinations'

export function generateCards(amount) {
  let cards = []
  const colors = ['blue', 'red', 'yellow']
  const shapes = ['circle', 'rectangle', 'triangle']
  const fills = ['full', 'striped', 'empty']

  for (let i = 1; i <= amount; i++) {
    let card = {
      color: colors[_.random(0, 2)],
      shape: shapes[_.random(0, 2)],
      fill: fills[_.random(0, 2)],
    }
    cards.push(card)
  }
  return cards
}

export function getAllSets(cards) {
  const allCombinations = combinations.k_combinations([0, 1, 2, 3, 4, 5, 6, 7, 8], 3)
  let sets = []
  for(let possibleSet in allCombinations){
    if(isSet(cards, allCombinations[possibleSet])) {
      sets.push(allCombinations[possibleSet])
    }
  }
  return sets
}

export function isSet(stateCards, stateSelectedCards) {
  let cards = stateCards
  let selectedCards = stateSelectedCards
  let shapes = []
  let colors = []
  let fills = []

  for(let card in selectedCards) {
    shapes.push(cards[selectedCards[card]].shape)
    colors.push(cards[selectedCards[card]].color)
    fills.push(cards[selectedCards[card]].fill)
  }

  if(allValuesUnique(shapes) == true || allValuesEqual(shapes) == true) {
    if(allValuesUnique(colors) == true || allValuesEqual(colors) == true) {
      if(allValuesUnique(fills) == true || allValuesEqual(fills) == true) {
        if(allValuesEqual(shapes) == true && allValuesEqual(fills) == true && allValuesEqual(colors) == true) {
          return false
        } else {
          return true
        }
      }
    }
  }
  return false
}
function allValuesUnique(array) {
  return _.uniq(array).length === array.length
}
function allValuesEqual(array) {
  for(let value in array) {
    if (array[value] !== array[0]) {
      return false
    }
  }
  return true
}
