const {getTokens, camelCase} = require('../utils')

const getBreakpoints = (layerName, stylesArtboard) => {
  const palette = {breakpoint: {}}
  const decorator = element => {
    const {name, absoluteBoundingBox} = element
    const tokens = {
      [camelCase(name)]: {value: `${absoluteBoundingBox.width}px`}
    }
    Object.assign(palette.breakpoint, tokens)
  }

  return getTokens(layerName, stylesArtboard, palette, decorator)
}

module.exports = getBreakpoints
