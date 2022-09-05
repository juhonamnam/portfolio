import { useEffect, useReducer } from 'react'
import {
  DEFAULT_WINDOW_MODAL_OPTION,
  WindowModalOption,
} from '../../util/types'
import { vwindow } from '../../util/vwindow'

interface AlertState extends WindowModalOption {
  message: string
  close: () => void
}

const reducer = (
  state: AlertState[],
  action:
    | {
        type: 'enqueue'
        payload: AlertState
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

export const AlertProvider = ({
  defaultOption = {},
}: {
  defaultOption?: WindowModalOption
}) => {
  const [alertQueue, alertQueueDispatch] = useReducer(reducer, [])

  useEffect(() => {
    vwindow.alert = (message, option) => {
      return new Promise<void>((resolve) => {
        alertQueueDispatch({
          type: 'enqueue',
          payload: {
            ...DEFAULT_WINDOW_MODAL_OPTION,
            ...defaultOption,
            ...option,
            message,
            close: () => {
              resolve()
              alertQueueDispatch({ type: 'dequeue' })
            },
          },
        })
      })
    }
  }, [defaultOption])

  if (!alertQueue.length) return <></>

  return (
    <>
      <div className="modal-bg">
        <div
          className={`modal ${
            alertQueue[0].color && 'bg-' + alertQueue[0].color
          }`}
        >
          {alertQueue[0].title && <h6>{alertQueue[0].title}</h6>}
          <span>{alertQueue[0].message}</span>
          <button onClick={() => alertQueue[0].close()}>
            {alertQueue[0].confirmLabel}
          </button>
        </div>
      </div>
    </>
  )
}
