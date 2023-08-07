import '../styles/global.css'
import { Inter } from 'next/font/google'
import 'tw-elements/dist/css/tw-elements.min.css'

const inter = Inter({ subsets: [ 'latin' ] })

export default function App({ Component, pageProps }) {
  return (<div className={inter.className}>
    <Component {...pageProps} />
  </div>)
}