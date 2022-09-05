import { useEffect, useMemo, useReducer } from 'react'
import { BackgroundColor, ModalOption } from '../../util/types'
import { vwindow } from '../../util/vwindow'

interface ConfirmState {
  title: string
  message: string
  color: BackgroundColor
  confirm: () => void
  cancel: () => void
}

const reducer = (
  state: ConfirmState[],
  action: { type: 'enqueue' | 'dequeue'; payload?: ConfirmState }
) => {
  switch (action.type) {
    case 'enqueue':
      if (action.payload) return [...state, action.payload]
    case 'dequeue':
      return state.slice(1)
    default:
      return state
  }
}

const DEFAULT_OPTION = {
  title: '',
  color: 'primary' as BackgroundColor,
}

export const ConfirmProvider = ({
  defaultOption = {},
}: {
  defaultOption?: ModalOption
}) => {
  const _defaultOption = useMemo(() => {
    return { ...DEFAULT_OPTION, ...defaultOption }
  }, [defaultOption])

  const [confirmQueue, confirmQueueDispatch] = useReducer(reducer, [])

  useEffect(() => {
    vwindow.confirm = (
      message: string,
      {
        title = _defaultOption.title,
        color = _defaultOption.color,
      } = _defaultOption
    ) => {
      return new Promise<boolean>((resolve) => {
        confirmQueueDispatch({
          type: 'enqueue',
          payload: {
            title: title,
            color: color,
            message,
            confirm: () => {
              resolve(true)
              confirmQueueDispatch({ type: 'dequeue' })
            },
            cancel: () => {
              resolve(false)
              confirmQueueDispatch({ type: 'dequeue' })
            },
          },
        })
      })
    }
  }, [_defaultOption])

  if (!confirmQueue.length) return <></>

  return (
    <>
      <div className="modal-bg">
        <div className={`modal bg-${confirmQueue[0].color}`}>
          {confirmQueue[0].title && <h6>{confirmQueue[0].title}</h6>}
          <span>{confirmQueue[0].message}</span>
          <button onClick={() => confirmQueue[0].confirm()}>Ok</button>
          <button onClick={() => confirmQueue[0].cancel()}>Cancel</button>
        </div>
      </div>
    </>
  )
}
