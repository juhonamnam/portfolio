export type Color =
  | 'primary'
  | 'primary-alt'
  | 'secondary'
  | 'secondary-alt'
  | 'info'
  | 'info-alt'

export interface ModalOption {
  color?: Color
}

export interface WindowModalOption extends ModalOption {
  title?: string
  confirmLabel?: string
  cancelLabel?: string
}

export const DEFAULT_WINDOW_MODAL_OPTION: Required<WindowModalOption> = {
  title: '',
  color: 'primary' as Color,
  confirmLabel: 'Ok',
  cancelLabel: 'Cancel',
}
