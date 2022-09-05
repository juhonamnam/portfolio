import { useEffect, useMemo, useReducer } from 'react'
import { BackgroundColor, ModalOption } from '../../util/types'
import { vwindow } from '../../util/vwindow'

interface AlertState {
  title: string
  message: string
  color: BackgroundColor
  close: () => void
}

const reducer = (
  state: AlertState[],
  action: { type: 'enqueue' | 'dequeue'; payload?: AlertState }
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

export const AlertProvider = ({
  defaultOption = {},
}: {
  defaultOption?: ModalOption
}) => {
  const _defaultOption = useMemo(() => {
    return { ...DEFAULT_OPTION, ...defaultOption }
  }, [defaultOption])

  const [alertQueue, alertQueueDispatch] = useReducer(reducer, [])

  useEffect(() => {
    vwindow.alert = (
      message,
      {
        title = _defaultOption.title,
        color = _defaultOption.color,
      } = _defaultOption
    ) => {
      return new Promise<void>((resolve) => {
        alertQueueDispatch({
          type: 'enqueue',
          payload: {
            title: title,
            color: color,
            message,
            close: () => {
              resolve()
              alertQueueDispatch({ type: 'dequeue' })
            },
          },
        })
      })
    }
  }, [_defaultOption])

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
          <button onClick={() => alertQueue[0].close()}>Ok</button>
        </div>
      </div>
    </>
  )
}
