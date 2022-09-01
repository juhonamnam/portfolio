import type { NextPage } from 'next'
import { vwindow } from 'src/global/util/vwindow'

const Home: NextPage = () => {
  return (
    <div className="container">
      <button className="bg-info hover" onClick={() => alert('Alert')}>
        Native Alert
      </button>
      <button className="bg-info hover" onClick={() => vwindow.alert('Alert')}>
        Custom Alert
      </button>
      <button className="bg-info hover" onClick={() => confirm('Confirm')}>
        Native Confirm
      </button>
      <button
        className="bg-info hover"
        onClick={() => vwindow.confirm('Confirm')}
      >
        Custom Confirm
      </button>
    </div>
  )
}

export default Home
