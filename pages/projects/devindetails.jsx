import Head from 'next/head'
import Layout from '../../components/Layout'
import SkillList from '../../components/SkillList'
import ShaderCanvas from '../../components/ShaderCanvas'
import Timeline from '../../components/Timeline'

export default function DevInDetails() {
  return (<Layout className="relative lg:flex lg:flex-wrap md:overflow-x-hidden md:overflow-y-visible">
    <Head>
      <title>Dev In Details | Sylvain Schellenberger</title>
      <meta name="description" content="A coder's blog about front-end and game development."/>
      <meta
        property="og:image"
        content="/images/phaser-360_003.png"
        />
      <meta
        name="og:title"
        content="A coder's blog about front-end and game development."
      />
    </Head>
    <section id="intro" className="relative z-[5] top-left-section">
      <h1 className="page-title">Dev In Details</h1>
      <p><a href="https://devindetails.com">Dev In Details</a> is my personal blog where I share my thoughts and experiments about <strong>front-end development</strong>. Mostly through the making of <i>browser games</i> using the <a href="https://phaser.io">Phaser framework</a>.</p>
    </section>
    <section id="skills" className="relative z-[5] top-right-section">
      <h2 className="top-right-section__title">Technologies in use</h2>
      <SkillList skills={[
        { name: 'WordPress', value: 95 },
        { name: 'CSS', value: 20 },
        { name: 'H5P.JS', value: 12 }
      ]} />
    </section>
    <section id="timeline" className="relative z-[5] basis-full">
      <h2 className="text-2xl font-extrabold">Timeline</h2>
      {/* <Timeline steps={[
        { 
          title: 'Next.js 13 Migration', 
          date: 'COMING SOON', 
          description: "Since most of the blog posts could be hosted as static files, which would increase web performance and reduce hosting costs, I decided to move the blog's front-end to Next.js 13.", 
          cover: 'https://devindetails.com/wp-content/uploads/2020/08/state-pattern_switch-state-620x451.png', 
          cta: { 
            url: 'https://devindetails.com/fr/state-pattern/', 
            title: 'Read Post' 
          }
        }
      ]} /> */}
    </section>
    <ShaderCanvas
      fragmentUrl="/scripts/borealis.frag"
      className="absolute bottom-0 w-full min-h-[320px] box-border skew-y-3 -translate-y-12 rounded-3xl"  
    />
  </Layout>)
}