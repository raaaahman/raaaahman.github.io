import Link from 'next/link'
import Head from 'next/head'

import Layout from '../components/Layout'

export default function Page404() {
  return (<Layout>
    <Head>
      <title>Error 404 | Sylvain Schellenberger</title>
      <meta name="description" content="This is not the page you are looking for." />
    </Head>
    <main className="h-screen flex flex-col justify-center items-center">
      <p className="my-4">Oops. This page does not exist...</p>
      <Link href="/" className="block">Back to home page</Link>
    </main>
  </Layout>)
}