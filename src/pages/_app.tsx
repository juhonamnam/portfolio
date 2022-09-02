import 'global/styles/global.scss'
import 'styles/local.scss'
import type { AppProps } from 'next/app'
import { AlertProvider } from 'global/components/atoms/Alert'
import { ConfirmProvider } from 'global/components/atoms/Confirm'

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
