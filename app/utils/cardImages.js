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

export function triangle(card) {
  return (
    <Polygon
      points="55,10 100,100 10,100"
      fill={card.fill == 'full' ? card.color : 'white'}
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
      fill={card.fill == 'full' ? card.color : 'white'}
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
      fill={card.fill == 'full' ? card.color : 'white'}
      strokeWidth={card.fill !== 'full' ? 4 : 0}
      stroke={card.color}
    />
  )
}
