import { useEffect, useState } from 'react'
import { vwindow } from 'src/global/utils'

const INITIAL_STATE = {
  isOpen: false,
  message: '',
  onClose: () => {},
}

export const AlertProvider = () => {
  const [alertState, setAlertState] = useState(INITIAL_STATE)

  useEffect(() => {
    vwindow.alert = (message: string) => {
      return new Promise<void>((resolve) => {
        setAlertState({
          isOpen: true,
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
        <div className="modal">
          {alertState.message}
          <button onClick={() => alertState.onClose()}>Close</button>
        </div>
      </div>
    </>
  )
}
