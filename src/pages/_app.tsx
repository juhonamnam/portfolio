import 'styles/global/global.scss'
import 'styles/local/local.scss'
import type { AppProps } from 'next/app'
import Navbar from 'src/components/Navbar'
import { AlertProvider } from 'src/global/components/atoms/Alert'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AlertProvider />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
