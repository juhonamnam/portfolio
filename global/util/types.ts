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
  title?: string
  color?: BackgroundColor
}
