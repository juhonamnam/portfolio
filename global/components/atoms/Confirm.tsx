import { useEffect, useReducer } from 'react'
import {
  DEFAULT_WINDOW_MODAL_OPTION,
  WindowModalOption,
} from '../../util/types'
import { vwindow } from '../../util/vwindow'
import { convertAltColor } from '../../util/convert'

interface ConfirmState extends Required<WindowModalOption> {
  message: string
  confirm: () => void
  cancel: () => void
}

const reducer = (
  state: ConfirmState[],
  action:
    | {
        type: 'enqueue'
        payload: ConfirmState
      }
    | {
        type: 'dequeue'
      }
) => {
  switch (action.type) {
    case 'enqueue':
      return [...state, action.payload]
    case 'dequeue':
      return state.slice(1)
    default:
      return state
  }
}

export const ConfirmProvider = ({
  defaultOption = {},
}: {
  defaultOption?: WindowModalOption
}) => {
  const [confirmQueue, confirmQueueDispatch] = useReducer(reducer, [])

  useEffect(() => {
    vwindow.confirm = (message, option) => {
      return new Promise<boolean>((resolve) => {
        confirmQueueDispatch({
          type: 'enqueue',
          payload: {
            ...DEFAULT_WINDOW_MODAL_OPTION,
            ...defaultOption,
            ...option,
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
  }, [defaultOption])

  if (!confirmQueue.length) return <></>

  return (
    <>
      <div className="modal-bg">
        <div className={`modal bg-${confirmQueue[0].color}`}>
          {confirmQueue[0].title && <h6>{confirmQueue[0].title}</h6>}
          <span>{confirmQueue[0].message}</span>
          <div className="modal-footer">
            <button
              className={'bg-' + convertAltColor(confirmQueue[0].color)}
              onClick={() => confirmQueue[0].confirm()}
            >
              {confirmQueue[0].confirmLabel}
            </button>
            <button
              className={'bg-' + convertAltColor(confirmQueue[0].color)}
              onClick={() => confirmQueue[0].cancel()}
            >
              {confirmQueue[0].cancelLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
