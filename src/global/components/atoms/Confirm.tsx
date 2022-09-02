import { useEffect, useMemo, useState } from 'react'
import { Color, ModalOption } from 'src/global/util/types'
import { vwindow } from 'src/global/util/vwindow'

const INITIAL_STATE = {
  isOpen: false,
  title: '',
  message: '',
  color: 'primary' as Color,
  confirm: () => {},
  cancel: () => {},
}

const DEFAULT_OPTION = {
  title: '',
  color: 'primary' as Color,
}

export const ConfirmProvider = ({
  defaultOption = {},
}: {
  defaultOption?: ModalOption
}) => {
  const _defaultOption = useMemo(() => {
    return { ...DEFAULT_OPTION, ...defaultOption }
  }, [defaultOption])

  const [confirmState, setConfirmState] = useState(INITIAL_STATE)

  useEffect(() => {
    vwindow.confirm = (
      message: string,
      {
        title = _defaultOption.title,
        color = _defaultOption.color,
      } = _defaultOption
    ) => {
      return new Promise<boolean>((resolve) => {
        setConfirmState({
          isOpen: true,
          title: title,
          color: color,
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
  }, [_defaultOption])

  if (!confirmState.isOpen) return <></>

  return (
    <>
      <div className="modal-bg">
        <div className={`modal bg-${confirmState.color}`}>
          {confirmState.title && <h6>{confirmState.title}</h6>}
          <span>{confirmState.message}</span>
          <button onClick={() => confirmState.confirm()}>Ok</button>
          <button onClick={() => confirmState.cancel()}>Cancel</button>
        </div>
      </div>
    </>
  )
}
