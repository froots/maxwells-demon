import React, { PropTypes } from 'react';

const Barrier = ({ x, y, width, height, closed }) => {
  const fillColor = (closed) ? '#fff' : 'transparent';
  return (
    <rect x={x-width/2} y={y} width={width} height={height} fill={fillColor} />
  );
}

Barrier.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  closed: PropTypes.bool.isRequired
};

export default Barrier;
