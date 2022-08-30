import { useEffect, useState } from 'react'
import { vwindow } from 'src/global/utils'

const INITIAL_STATE = {
  isOpen: false,
  message: '',
  confirm: () => {},
  cancel: () => {},
}

export const ConfirmProvider = () => {
  const [confirmState, setConfirmState] = useState(INITIAL_STATE)

  useEffect(() => {
    vwindow.confirm = (message: string) => {
      return new Promise<boolean>((resolve) => {
        setConfirmState({
          isOpen: true,
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
        <div className="modal">
          {confirmState.message}
          <button onClick={() => confirmState.cancel()}>No</button>
          <button onClick={() => confirmState.confirm()}>Yes</button>
        </div>
      </div>
    </>
  )
}
