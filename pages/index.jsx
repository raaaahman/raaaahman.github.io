import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/Layout'
import { getSortedProjectsData } from '../utils/projects'
import Card, { CardHeader, CardContent } from '../components/Card'
import CategoryIcon from '../components/CategoryIcon'

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()

  return {
    props: {
      allProjectsData
    }
  }
}

export default function HomePage({ allProjectsData }) {
  return (<Layout home>
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
    <section className="flex flex-col mx-auto mb-24">
      <h1 className="text-4xl font-extrabold my-4">Looking for your Next developer?</h1>
      <p>Look no further!</p>
      <Image
        priority
        alt="Sylvain Schellenberger"
        src="/images/profile.jpg"
        className="rounded-full"
        height={144}
        width={144}
      />
    </section>
    <section>
      <h2 className="text-2xl font-extrabold my-4">Projects</h2>
      {allProjectsData.map(({ id, title, cover, category, description }) => (
        <Link href={`/projects/${id}`} className="text-inherit">
          <Card key={id}>
            <CardHeader 
              cover={cover}
              description={title}
            />
            <CardContent>
              <CategoryIcon 
                category={category}
                className="w-8 h-8 text-white-weak mr-4 self-center"
              />
              <div>
                <h3 className="text-white-medium text-lg font-semibold">{title}</h3>
                <p className="text-white-weak">{description}</p>
              </div> 
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  </Layout>)
} 
