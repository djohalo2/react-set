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

function getFill(card) {
  return (card.fill == 'full') ? card.color : (card.fill =='striped') ? card.color.slice(0, -4) + '0.2)' : 'none'
}

export function triangle(card) {
  return (
    <Polygon
      points="55,10 100,100 10,100"
      fill={getFill(card)}
      strokeWidth={card.fill !== 'full' ? 4 : 0}
      stroke={card.color}
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
      stroke={card.color}
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
      stroke={card.color}
    />
  )
}
