import React, { PropTypes } from 'react';
import { getBackgroundColorFromTemperature } from './colors';

const Container = ({ x, y, width, height, temperature }) => {
   const fillColor = getBackgroundColorFromTemperature(temperature);
   return (
     <rect x={x} y={y} width={width} height={height} fill={fillColor} />
   )
}

Container.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Container;
