import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/Layout'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function HomePage() {
  return (<Layout home={true}>
    <Head>
      <title>React / Next + Firebase Developer | Sylvain Schellenberger</title>
      <link rel="icon" href="/favicon.ico"/>
      <meta
        name="description"
        content="Front-end developer with a focus on interactive experiences."
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/sylvain%20schellenberger.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
      <meta
        name="oc:title"
        content="Sylvain Schellenberger, Front-end developer"
      />
    </Head>
    <header className={styles.header}>
      <h1 className={utilStyles.heading2X1}>Looking for your Next developer?</h1>
      <p>Look no further!</p>
      <Image
        priority
        alt="Sylvain Schellenberger"
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
      />
    </header>
    <main>
      <section>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <article><h3 className={utilStyles.headingMd}><Link href="/projects/fairie" className={utilStyles.colorInherit}>F.A.I.R.I.E.</Link></h3></article>
      </section>
    </main>
  </Layout>)
} 