import { useEffect, useState } from 'react'
import { Color, ModalOption } from 'src/global/util/types'
import { vwindow } from 'src/global/util/vwindow'

const INITIAL_STATE = {
  isOpen: false,
  message: '',
  color: 'primary' as Color,
  onClose: () => {},
}

export const AlertProvider = ({
  defaultOption = { color: 'primary' },
}: {
  defaultOption?: ModalOption
}) => {
  const [alertState, setAlertState] = useState(INITIAL_STATE)

  useEffect(() => {
    vwindow.alert = (message, option = defaultOption) => {
      return new Promise<void>((resolve) => {
        setAlertState({
          isOpen: true,
          color: option.color || 'primary',
          message,
          onClose: () => {
            resolve()
            setAlertState(INITIAL_STATE)
          },
        })
      })
    }
  }, [])

  if (!alertState.isOpen) return <></>

  return (
    <>
      <div className="modal-bg">
        <div className={`modal bg-${alertState.color}`}>
          {alertState.message}
          <button onClick={() => alertState.onClose()}>Ok</button>
        </div>
      </div>
    </>
  )
}
