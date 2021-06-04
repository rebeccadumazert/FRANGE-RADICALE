import '../public/fonts/fonts.css'

import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head></Head>
      <Component {...pageProps} />
    </div>
  )
}
