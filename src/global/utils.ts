export const vwindow = {
  alert: async (message: string) => {
    alert(message)
  },
  confirm: async (message: string) => {
    return confirm(message)
  },
}
