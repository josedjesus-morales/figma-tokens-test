const {getTokens, camelCase} = require('../utils')

const getSpacing = (layerName, stylesArtboard) => {
  const palette = {spacing: {}}
  const decorator = element => {
    const {
      name,
      absoluteBoundingBox: {width}
    } = element
    const tokens = {
      [camelCase(name)]: {value: `${width}px`}
    }
    Object.assign(palette.spacing, tokens)
  }

  return getTokens(layerName, stylesArtboard, palette, decorator)
}

module.exports = getSpacing
