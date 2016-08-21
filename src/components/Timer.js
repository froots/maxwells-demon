import React, { PropTypes } from 'react'

const Timer = ({x, y, width, height, time}) => {
  const textY = y + height/2
  const secondsRemaining = 60 - Math.floor(time/1000)

  return (
    <text x={x} y={textY} dominantBaseline="middle" textAnchor="end" fontSize="5" fill="#fff">
      {secondsRemaining}
    </text>
  )
}

Timer.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
}

export default Timer
