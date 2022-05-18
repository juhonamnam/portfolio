import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from 'styles/Home.module.css'
import Intro from 'src/components/Intro'
import About from 'src/components/About'
import Career from 'src/components/Career'
const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <About />
      <Career />
    </>
  )
}

export default Home
