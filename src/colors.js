const colors = {
  hot: {
    background: "rgba(255,20,30,.15)",
    backgroundOn: "rgba(255,20,30,.25)",
    atom: "rgba(255,20,30,.7)"
  },
  cold: {
    background: "rgba(20,30,255,.15)",
    backgroundOn: "rgba(20,30,255,.25)",
    atom: "rgba(20,30,255,.7)"
  }
}

export function getBackgroundColorFromTemperature(temperature) {
  return (temperature === 'hot') ? colors.hot.background : colors.cold.background
}

export function getBackgroundOnColorFromTemperature(temperature) {
  return (temperature === 'hot') ? colors.hot.backgroundOn : colors.cold.backgroundOn
}

export function getAtomColorFromTemperature(temperature) {
  return (temperature === 'hot') ? colors.hot.atom : colors.cold.atom
}

export default colors
