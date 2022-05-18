import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from 'src/components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
