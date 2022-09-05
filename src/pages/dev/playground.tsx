import type { NextPage } from 'next'
import { vwindow } from 'global/util/vwindow'

const Home: NextPage = () => {
  return (
    <div className="container">
      <button className="bg-primary hover" onClick={() => alert('Alert')}>
        Native Alert
      </button>
      <button
        className="bg-primary-alt hover"
        onClick={() => {
          vwindow.alert('Alert1')
          vwindow.alert('Alert2', {
            color: 'info-alt',
            confirmLabel: 'asgas',
            title: 'Title',
          })
          vwindow.alert('Alert3', { color: 'secondary-alt' })
        }}
      >
        Custom Alert
      </button>
      <button className="bg-secondary hover" onClick={() => confirm('Confirm')}>
        Native Confirm
      </button>
      <button
        className="bg-secondary-alt hover"
        onClick={async () => {
          vwindow.confirm('Confirm1')
          vwindow.confirm('Confirm2', {
            color: 'info-alt',
            cancelLabel: 'asdf',
          })
          vwindow.confirm('Confirm3', {
            color: 'secondary-alt',
            confirmLabel: 'gffgh',
          })
        }}
      >
        Custom Confirm
      </button>
    </div>
  )
}

export default Home
