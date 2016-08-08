const colors = {
  hot: {
    background: "#300",
    atom: "#c00"
  },
  cold: {
    background: "#003",
    atom: "#00c"
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
