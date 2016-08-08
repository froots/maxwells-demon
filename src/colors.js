const colors = {
  hot: {
    background: "#300",
    atom: "#e66"
  },
  cold: {
    background: "#003",
    atom: "#66e"
  }
};

export function getBackgroundColorFromTemperature(temperature) {
  switch(temperature) {
    case 'hot':
      return colors.hot.background;
    default:
      return colors.cold.background;
  }
}

export function getAtomColorFromTemperature(temperature) {
  switch(temperature) {
    case 'hot':
      return colors.hot.atom;
    default:
      return colors.cold.atom;
  }
}
