import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout.jsx'

export default function Page500() {
  return (<Layout>
    <Head>
      <title>Server Error | Sylvain Schellenberger</title>
      <meta name="description" content="There's been an error with your request." />
    </Head>
    <main className="h-screen flex flex-col justify-center items-center">
      <p className="text-center my-4">Error 500. Something went wrong... but it's on our end!</p>
      <Link href="/" className="block">Back to home page.</Link>
    </main>
  </Layout>)
}