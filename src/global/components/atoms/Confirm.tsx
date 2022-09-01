import { useEffect, useState } from 'react'
import { Color, ModalOption } from 'src/global/util/types'
import { vwindow } from 'src/global/util/vwindow'

const INITIAL_STATE = {
  isOpen: false,
  message: '',
  color: 'primary' as Color,
  confirm: () => {},
  cancel: () => {},
}

export const ConfirmProvider = ({
  defaultOption = { color: 'primary' },
}: {
  defaultOption?: ModalOption
}) => {
  const [confirmState, setConfirmState] = useState(INITIAL_STATE)

  useEffect(() => {
    vwindow.confirm = (message: string, option = defaultOption) => {
      return new Promise<boolean>((resolve) => {
        setConfirmState({
          isOpen: true,
          color: option.color || 'primary',
          message,
          confirm: () => {
            resolve(true)
            setConfirmState(INITIAL_STATE)
          },
          cancel: () => {
            resolve(false)
            setConfirmState(INITIAL_STATE)
          },
        })
      })
    }
  }, [])

  if (!confirmState.isOpen) return <></>

  return (
    <>
      <div className="modal-bg">
        <div className={`modal bg-${confirmState.color}`}>
          {confirmState.message}
          <button onClick={() => confirmState.confirm()}>Ok</button>
          <button onClick={() => confirmState.cancel()}>Cancel</button>
        </div>
      </div>
    </>
  )
}
