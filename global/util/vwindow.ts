/* eslint-disable */
import { ModalOption } from './types'

export const vwindow = {
  alert: async (message: string, option: ModalOption = {}) => {
    alert(message)
  },
  confirm: async (message: string, option: ModalOption = {}) => {
    return confirm(message)
  },
}
