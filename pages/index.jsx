import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (<>
    <Head>
      <title>React / Next + Firebase Developer | Sylvain Schellenberger</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <main>
      <h1>Looking for your Next developer?</h1>
      <p>Look no further!</p>

      <secton>
        <h2>Some projects I did</h2>
        <article><h3><Link href="/projects/fairie">F.A.I.R.I.E.</Link></h3></article>
      </secton>
    </main>
  </>)
} 