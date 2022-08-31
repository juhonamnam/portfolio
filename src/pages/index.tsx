import type { NextPage } from 'next'
import Intro from 'src/components/Intro'
import About from 'src/components/About'
import Career from 'src/components/Career'
import Navbar from 'src/components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Career />
    </>
  )
}

export default Home
