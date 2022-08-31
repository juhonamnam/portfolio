import 'styles/global/global.scss'
import 'styles/local/local.scss'
import type { AppProps } from 'next/app'
import { AlertProvider } from 'src/global/components/atoms/Alert'
import { ConfirmProvider } from 'src/global/components/atoms/Confirm'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AlertProvider />
      <ConfirmProvider />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
