import React, { PropTypes } from 'react'
import { getAtomColorFromTemperature } from '../colors'

const Atom = ({location, radius, temperature}) => {
  const fillColor = getAtomColorFromTemperature(temperature)
  return (
    <circle cx={location.x} cy={location.y} r={radius} fill={fillColor} />
  )
}

Atom.propTypes = {
  location: PropTypes.object.isRequired,
  radius: PropTypes.number.isRequired,
  temperature: PropTypes.string.isRequired
}

export default Atom;
