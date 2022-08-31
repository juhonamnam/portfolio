import type { NextPage } from 'next'
import { vwindow } from 'src/global/util/vwindow'

const Home: NextPage = () => {
  return (
    <div className="container">
      <button className="bg-info hover" onClick={() => vwindow.alert('Test')}>
        test
      </button>
    </div>
  )
}

export default Home
