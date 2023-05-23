import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/Layout";

export default function FAIRIEProject() {
  return (<Layout home={false}>
    <Head>
      <title>F.A.I.R.I.E. | Alternate Reality Game Companion Application</title>
      <meta name="description" content="F.A.I.R.I.E. is an interactive fiction that acts as a companion to The Index web serie, both being part of a broader alternate reality game."/>
    </Head>

    <pre id="background" style={{
          boxSizing: 'border-box',
          margin: 0,
          width: '100%',
          minHeight: '100vh',
          overflow: 'hidden',
          background: 'black',
          fontFamily: '"Courier New", monospace',
          color: 'darkgreen'
    }}></pre>

    <h1>F.A.I.R.I.E.</h1>
    <Link href="/">Back to home</Link>

    <Script
      src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js"
      strategy="lazyOnload"
    />
    <Script 
      strategy="afterInteractive" 
      src="/scripts/digital-rain.js" 
      />
  </Layout>)
}