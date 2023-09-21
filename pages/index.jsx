import Head from 'next/head'
import Link from 'next/link'
import { AcademicCapIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid'

import Layout from '../components/Layout'
import Card, { CardHeader, CardContent } from '../components/Card'
import SkillList from '../components/SkillList'
import ShaderCanvas from '../components/ShaderCanvas'
import fairieSearchResult from '../public/images/fairie_desktop_search-result.png'
import phaser360 from '../public/images/phaser-360_003.png'

export default function HomePage() {
  return (<Layout home className="lg:flex lg:flex-wrap">
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
        content="Sylvain Schellenberger, React Developer / Creative Coder"
      />
    </Head>
    <section id="intro" className="relative z-[5] top-left-section">
      <span className="block text-lg text-right md:text-left">Sylvain Schellenberger</span>
      <h1 className="page-title">Freelance React Developer & Creative Coder</h1>
      <p className="text-justify mb-4">
        Are you looking for a <strong>front-end developer</strong> with an itch for innovation and a thirst for <strong>creative coding</strong>? Look no further!</p>
      <p className="text-justify">
       From <strong>crafting visually striking websites</strong> to <strong>building interactive games</strong>, I thrive on pushing the boundaries of web development. With a solid foundation in front-end technologies such as <em>TypeScript</em> and <em>React</em>, combined to an eagerness to learn graphical libraries like <em>Phaser</em> or <em>Three.js</em>, I can transform your ideas into <strong>captivating digital experiences</strong> that users won't soon forget.
      </p>
    </section>
    <section className="relative z-[5] top-right-section">
      <h2 className="top-right-section__title">Skills</h2>
      <SkillList 
        skills={[
          { name: 'GLSL', value: 5 },
          { name: 'Three.js', value: 15 },
          { name: 'Tailwind CSS', value: 35 },
          { name: 'Phaser', value: 65 },
          { name: 'TypeScript', value: 75 },
          { name: 'JavaScript', value: 85 },
          { name: 'React', value: 80 },
          { name: 'FireBase', value: 55 },
          { name: 'Redux', value: 35 },
          { name: 'Next.js', value: 20 },
        ]}
      />
    </section>
    <section id="projects" className="relative z-[5] lg:flex-none w-full mb-8">
      <h2 className="section-title">Projects</h2>
      <div className="lg:flex lg:flex-wrap lg:items-stretch">
        <Link 
          href="/projects/fairie"
          className="block xl:flex-1 xl:basis-[40%] xl:[&:not(:first-child)]:ml-4 xl:[&:not(:last-child)]:mr-4 mb-8"
        >
          <Card className="text-inherit h-full">
            <CardHeader
              cover={fairieSearchResult}
              title="F.A.I.R.I.E."
            />
            <CardContent>
              <PuzzlePieceIcon title="Entertainment" className="hidden lg:block lg:basis-10 lg:mx-4"/>
              <div>
                <h3 className="text-white-medium text-lg font-semibold">Dev In Details</h3>
                <p className="text-white-weak">A coder's blog about the playful implementation of serious front-end development concepts.</p>
              </div> 
            </CardContent>
          </Card>
        </Link>
        <Link 
          href="/projects/devindetails"
          className="block xl:flex-1 xl:basis-[40%] xl:[&:not(:first-child)]:ml-4 xl:[&:not(:last-child)]:mr-4 mb-8"
        >
          <Card className="text-inherit h-full">
            <CardHeader
              cover={phaser360}
              title="Dev In Details"
            />
            <CardContent>
              <AcademicCapIcon title="Education" className="hidden lg:block lg:basis-12 lg:mx-4"/>
              <div>
                <h3 className="text-white-medium text-lg font-semibold">F.A.I.R.I.E.</h3>
                <p className="text-white-weak">F.A.I.R.I.E. is an interactive fiction that serves as a companion app for an alternate reality game set in the story-world of The Index.</p>
              </div> 
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>
    <ShaderCanvas
      fragmentUrl="/scripts/borealis.frag"
      className="fixed left-0 top-0 w-full min-h-screen"
    />
  </Layout>)
}

