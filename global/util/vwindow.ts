/* eslint-disable */
import { WindowModalOption } from './types'

export const vwindow = {
  alert: async (message: string, option: WindowModalOption = {}) => {
    alert(message)
  },
  confirm: async (message: string, option: WindowModalOption = {}) => {
    return confirm(message)
  },
}
