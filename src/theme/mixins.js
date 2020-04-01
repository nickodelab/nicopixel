
/**
 * Creates all flex rules
 * @param {String} flexFlow
 * @param {String} justifyContent
 * @param {String} alignItems
 */
const flexy = (flexFlow, justifyContent, alignItems) => ({
  display: 'flex',
  flexFlow,
  justifyContent,
  alignItems,
})

/**
 * Convert HEX color to rgb with opacity
 * convertToRGB('#cccccc', 0.5) | output => "rgba(204,204,204,0.5)"
 *
 * @param {String} HEXColor - starting with '#'
 * @param {Number} opacity
 */
const convertToRGB = (HEXColor, opacity = 1) => {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(HEXColor)) {
    c = HEXColor.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = `${'0x'}${c.join('')}`
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')}, ${opacity})`
  }
  throw new Error('Bad HEXColor')
}

export {
  flexy,
  convertToRGB
}
