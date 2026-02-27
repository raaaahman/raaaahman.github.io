import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout'
import Card, { CardHeader, CardContent } from '../components/Card'
import SkillList from '../components/SkillList'
import fairieSearchResult from '../public/images/fairieDesktop_search-result.png'
import sunnyNewWorldLogo from '../public/images/sunny-new-world-logo.svg'
import hexpandCover from '../public/images/hexpand_preview.png'
import themindplexRoom from '../public/images/themindplex_room.png'
import hackbackCover from '../public/images/hackback_cover.jpg'

export default function HomePage() {
  return (
    <Layout home className="lg:flex lg:flex-wrap">
      <Head>
        <title>
          Browser Games developer | Sylvain Schellenberger
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Front-end developer with a focus on interactive experiences and games."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/sylvain%20schellenberger.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name="oc:title"
          content="Sylvain Schellenberger, React / Phaser Developer"
        />
      </Head>
      <section id="intro" className="relative z-[5] top-left-section">
        <span className="block text-lg text-right md:text-left">
          Sylvain Schellenberger
        </span>
        <h1 className="page-title">
          Brower Games Developer
        </h1>
        <p className="text-justify mb-4">
          Do you want to create highly engaging <strong>interactive experiences</strong> and <strong>games</strong> that run in the browser?
          I can build it for you!
        </p>
        <p className="text-justify"> 
          With a solid foundation in <strong>front-end</strong> technologies and my passion for <strong>game development</strong>, I can mix and match libraries like <em>React</em>, <em>Zustand</em>, <em>Phaser</em> and <em>Three.JS</em> to create truly unique experiences: multiplayer games, interactive fictions, alternate reality games... the limit is your imagination!
        </p>
      </section>
      <section className="relative z-[5] top-right-section">
        <h2 className="top-right-section__title">Skills</h2>
        <SkillList
          skills={[
            { name: "Three.js", value: 30 },
            { name: "Tailwind CSS", value: 45 },
            { name: "Phaser", value: 65 },
            { name: "TypeScript", value: 75 },
            { name: "JavaScript", value: 85 },
            { name: "React", value: 80 },
            { name: "FireBase", value: 40 },
            { name: "Zustand", value: 35 },
            { name: "Next.js", value: 15 },
          ]}
        />
      </section>
      <section
        id="projects"
        className="relative z-[5] lg:flex-none w-full mb-8"
      >
        <h2 className="section-title">Projects</h2>
        <div className="lg:flex lg:flex-wrap lg:items-stretch">
          <Link
            href="/projects/the-mindplex"
            className="block xl:flex-1 xl:basis-[40%] xl:even:ml-4 xl:odd:mr-4 mb-8"
          >
            <Card className="text-inherit h-full">
              <CardHeader cover={themindplexRoom} title="The Mindplex" />
              <CardContent>
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-white-medium text-lg font-semibold">
                    The Mindplex
                  </h3>
                  <p className="text-white-weak">
                    The Mindplex is an <em>Alternate Reality Game</em> that develops the universe of the musician DHeusta.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link
            href="/projects/fairie"
            className="block xl:flex-1 xl:basis-[40%] xl:even:ml-4 xl:odd:mr-4 mb-8"
          >
            <Card className="text-inherit h-full">
              <CardHeader cover={fairieSearchResult} title="F.A.I.R.I.E." />
              <CardContent>
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-white-medium text-lg font-semibold">
                    F.A.I.R.I.E.
                  </h3>
                  <p className="text-white-weak">
                    F.A.I.R.I.E. is an interactive fiction that serves as a
                    companion app for an <em>Alternate Reality Game</em> set in the
                    story-world of The Index.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
      <section 
        id="game-jams"
        className="relative z-[5] lg:flex-none w-full mb-8"
      >
        <h2 className="section-title">Game Jams</h2>
        <div className="lg:flex lg:flex-wrap lg:items-stretch">
          <Link
            href="/projects/hackback"
            className="block xl:flex-1 xl:basis-[30%] mb-8"
          >
            <Card className="text-inherit h-full">
              <CardHeader
                cover={hackbackCover}
                title="Hack Back"
                className={`object-contain object-center rounded-3xl bg-gradient-to-tl from-[rgba(96,117,224,0.55)] to-[rgba(207,196,143,0.55)]`}
              />
              <CardContent>
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-white-medium text-lg font-semibold">
                    Hack Back
                  </h3>
                  <p className="text-white-weak">
                    An Interactive Fiction about high school teenagers trying to uncover a techno-conspiracy happening on their school provided devices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link
            href="/projects/hexpand"
            className="block xl:flex-1 xl:basis-[30%] xl:mx-4 mb-8"
          >
            <Card className="text-inherit h-full">
              <CardHeader
                cover={hexpandCover}
                title="Sunny New World"
                className={`object-contain object-center rounded-3xl bg-gradient-to-tl from-[rgba(96,117,224,0.55)] to-[rgba(207,196,143,0.55)]`}
              />
              <CardContent>
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-white-medium text-lg font-semibold">
                    Hexpand
                  </h3>
                  <p className="text-white-weak">
                    Simple strategy game about territorial conquest for two players.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link
            href="/projects/sunny-new-world"
            className="block xl:flex-1 xl:basis-[30%] mb-8"
          >
            <Card className="text-inherit h-full">
              <CardHeader
                cover={sunnyNewWorldLogo}
                title="Sunny New World"
                className={`object-contain object-center rounded-3xl bg-gradient-to-tl from-[rgba(96,117,224,0.55)] to-[rgba(207,196,143,0.55)]`}
              />
              <CardContent>
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-white-medium text-lg font-semibold">
                    Sunny New World
                  </h3>
                  <p className="text-white-weak">
                    Cooperative multiplayer game about rebuilding civilization
                    with renewable energy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

