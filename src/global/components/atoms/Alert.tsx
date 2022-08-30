import { useEffect, useState } from 'react'
import { vwindow } from 'src/global/utils'

const Alert = ({ message = '' }) => {
  if (message) {
    return (
      <>
        <div className="modal-bg">
          <div className="modal">{message}</div>
        </div>
      </>
    )
  }

  return <></>
}

export const AlertProvider = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    vwindow.alert = setMessage
  }, [])

  return (
    <>
      <Alert message={message} />
    </>
  )
}
