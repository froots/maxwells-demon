import React, { PropTypes } from 'react'
import {
  getBackgroundColorFromTemperature,
  getBackgroundOnColorFromTemperature,
  getAtomColorFromTemperature } from '../colors'

const Container = ({ x, y, width, height, temperature, score }) => {
  const fillColor = (score === 0) ?
    getBackgroundOnColorFromTemperature(temperature) :
    getBackgroundColorFromTemperature(temperature)
  const textColor = (score === 0) ? '#fff' : getAtomColorFromTemperature(temperature)
  const textX = x + width / 2
  const textY = y + height / 2
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fillColor} />
      <text dominantBaseline="middle" textAnchor="middle" x={textX} y={textY} fill={textColor}>{ score }</text>
    </g>
  )
}

Container.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  temperature: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

export default Container
