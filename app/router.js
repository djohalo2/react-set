import React from 'react';
import { StackNavigator } from 'react-navigation';

import Game from './components/Game/Game';
import Menu from './components/Menu/Menu';

export const Router = StackNavigator({
  Menu: { screen: Menu },
  Game: { screen: Game },
});
