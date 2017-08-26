import React from 'react';
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

function getColorCode(color) {
  switch(color) {
    case 'blue':
      return 'rgba(52, 152, 219, 1.0)'
    case 'red':
      return 'rgba(231, 76, 60, 1.0)'
    case 'yellow':
      return 'rgba(241, 196, 15, 1.0)'
  }
}

function getFill(card) {
  return (card.fill == 'full') ? getColorCode(card.color) : (card.fill =='striped') ? getColorCode(card.color).slice(0, -4) + '0.35)' : 'none'
}

export function triangle(card) {
  return (
    <Polygon
      points="55,10 100,100 10,100"
      fill={getFill(card)}
      strokeWidth={card.fill !== 'full' ? 4 : 0}
      stroke={getColorCode(card.color)}
    />
  )
}
export function rectangle(card) {
  return (
    <Rect
      x="12.5"
      y="12.5"
      width="85"
      height="85"
      fill={getFill(card)}
      strokeWidth={card.fill !== 'full' ? 4 : 0}
      stroke={getColorCode(card.color)}
    />
  )
}
export function circle(card) {
  return (
    <Circle
      cx="55"
      cy="55"
      r="45"
      fill={getFill(card)}
      strokeWidth={card.fill !== 'full' ? 4 : 0}
      stroke={getColorCode(card.color)}
    />
  )
}
