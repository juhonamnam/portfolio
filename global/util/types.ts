export type BackgroundColor =
  | 'primary'
  | 'primary-alt'
  | 'secondary'
  | 'secondary-alt'
  | 'info'
  | 'info-alt'
  | 'light'
  | 'dark'

export type TextColor = 'primary' | 'secondary' | 'info' | 'light' | 'dark'

export interface ModalOption {
  color?: BackgroundColor
}

export interface WindowModalOption extends ModalOption {
  title?: string
  confirmLabel?: string
  cancelLabel?: string
}

export const DEFAULT_WINDOW_MODAL_OPTION = {
  title: '',
  color: 'primary' as BackgroundColor,
  confirmLabel: 'Ok',
  cancelLabel: 'Cancel',
}
