import { Color } from './types'

export const convertAltColor = (color: Color) => {
  if (color.endsWith('-alt')) return color.slice(0, -4)

  return color + '-alt'
}
