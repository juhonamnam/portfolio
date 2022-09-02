import { useEffect, useMemo, useState } from 'react'
import { Color, ModalOption } from '../../util/types'
import { vwindow } from '../../util/vwindow'

const INITIAL_STATE = {
  isOpen: false,
  title: '',
  message: '',
  color: 'primary' as Color,
  onClose: () => {},
}

const DEFAULT_OPTION = {
  title: '',
  color: 'primary' as Color,
}

export const AlertProvider = ({
  defaultOption = {},
}: {
  defaultOption?: ModalOption
}) => {
  const _defaultOption = useMemo(() => {
    return { ...DEFAULT_OPTION, ...defaultOption }
  }, [defaultOption])

  const [alertState, setAlertState] = useState(INITIAL_STATE)

  useEffect(() => {
    vwindow.alert = (
      message,
      {
        title = _defaultOption.title,
        color = _defaultOption.color,
      } = _defaultOption
    ) => {
      return new Promise<void>((resolve) => {
        setAlertState({
          isOpen: true,
          title: title,
          color: color,
          message,
          onClose: () => {
            resolve()
            setAlertState(INITIAL_STATE)
          },
        })
      })
    }
  }, [_defaultOption])

  if (!alertState.isOpen) return <></>

  return (
    <>
      <div className="modal-bg">
        <div
          className={`modal ${alertState.color && 'bg-' + alertState.color}`}
        >
          {alertState.title && <h6>{alertState.title}</h6>}
          <span>{alertState.message}</span>
          <button onClick={() => alertState.onClose()}>Ok</button>
        </div>
      </div>
    </>
  )
}
