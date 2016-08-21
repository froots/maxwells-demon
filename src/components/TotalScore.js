import React, { PropTypes } from 'react'

const TotalScore = ({x, y, width, height, score}) => {
  const textX = x
  const textY = y + height / 2
  return (
    <text x={textX} y={textY} dominantBaseline="middle" textAnchor="start" fontSize="5" fill="#fff">
      {score}
    </text>
  )
}

TotalScore.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
}

export default TotalScore
