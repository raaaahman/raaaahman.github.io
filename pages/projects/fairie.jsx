import Head from 'next/head'
import Image from 'next/image'

import SkillList from '../../components/SkillList'
import Layout from '../../components/Layout'
import laptopFrame from '../../public/images/laptop-frame.png'
import mobileFrame from '../../public/images/mobile-frame.png'
import fairieHome from '../../public/images/fairie_mobile_home.png'
import fairieTerminal from '../../public/images/fairie_mobile_terminal.png'
import fairiePhone from '../../public/images/fairie_mobile_phone.png'
import fairieMailbox from '../../public/images/fairie_desktop_mailbox.png'
import fairieEmail  from '../../public/images/fairie_desktop_compose-mail.png'
import fairieSearch from '../../public/images/fairie_desktop_search-result.png'
import CarouselContainer from '../../components/Carousel/CarouselContainer'
import { CarouselControlNext, CarouselControlPrev } from '../../components/Carousel/CarouselControls'
import CarouselContextProvider from '../../components/Carousel/CarouselContext'
import Indicators from '../../components/Carousel/Indicators'

export default function FAIRIEProject() {
  return (<Layout className="lg:flex lg:flex-wrap">
    <Head>
      <title>F.A.I.R.I.E. | Sylvain Schellenberger</title>
      <link rel="icon" href="/favicon.ico"/>
      <meta
        name="description"
        content="An interactive fiction made as a web application, serving as a gateway to a wider Alternate Reality Game."
      />
      <meta
        property="og:image"
        content="/images/fairie_desktop_compose-mail.png"
        />
      <meta
        name="oc:title"
        content="F.A.I.R.I.E., Interactive Fiction in The Index's universe."
      />
    </Head>
    <section id="intro" className="top-left-section">
      <h1 className="page-title">F.A.I.R.I.E.</h1>
      <p className="text-justify mb-4"><a href="https://theindex.world/">The Index project</a> is an entertainment franchise created by Rustin L. Odom, it is set in a mysterious world where the laws of reality can be bent, broken and exploited through hacking the mind of the masses.</p>
      <p className="text-justify mb-4">F.A.I.R.I.E. is an <strong>interactive fiction</strong> made as a web application. It is part of a wider <strong>Alternate Reality Game</strong> set in this universe, spanning across multiple medias: a web series, a Discord server, a twitch channel...</p>
    </section>
    <section className="top-right-section">
      <h2 className="text-2xl text-center font-extrabold">Technologies In Use</h2>
      <SkillList
        skills={[
          { name: 'TypeScript', value: 70 },
          { name: 'Styled Components', value: 75 },
          { name: 'React', value: 80 },
          { name: 'FireBase', value: 55 },
          { name: 'Yarn Spinner', value: 45 },
          { name: 'Node.js', value: 25 },
          { name: 'OAuh2', value: 15 }
        ]}
      />
    </section>
    <section className="hidden md:block">
      <h2 className="invisible">Screenshots</h2>
      <CarouselContextProvider
        duration={600}
        autoRun={4000}
      >
        <figure className="relative">
          <CarouselControlPrev 
            size="3rem"
            className="flex w-[15%] items-center justify-center border-0 bg-none text-center text-white-strong opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none" 
          />
          <Image
            src={laptopFrame}
            alt="Portable computer."
            role="presentation"
            className="relative z-10"
          />
          <CarouselContainer
            className="absolute z-0 w-[76%] h-[76%] top-[9%] left-[12%] object-cover object-center"
            items={[
              <Image
                className="block w-full h-full object-cover"
                src={fairieSearch}
                alt="F.A.I.R.I.E. contains a lot of information on The Index universe, that players can access through search features and pseudo-hacking of websites."
              />,
              <Image
                className="block w-full h-full object-cover"
                src={fairieMailbox}
                alt="Players can consult emails they received from various in-game characters as they progress through the stories."
              />,
              <Image
                className="block w-full h-full object-cover"
                src={fairieEmail}
                alt="F.A.I.R.I.E. allows players to gather clues through sending fake emails to the in-game characters"
              /> 
            ]}
          />
          <Indicators 
            className="list-none absolute bottom-[15%] right-[12%] left-[12%] z-[15] flex justify-center"
            indicatorClassName="relative z-[16] mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white-strong bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            activeClassName="relative z-[16] mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white-strong bg-clip-padding p-0 -indent-[999px] opacity-100 transition-opacity ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          />
          <CarouselControlNext 
            size="3rem"
            className="flex w-[15%] items-center justify-center border-0 bg-none text-center text-white-strong opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          />
        </figure>
      </CarouselContextProvider>
    </section>
    <section className="md:max-w-6xl md:mx-auto md:flex">
      <div className="md:flex-1 md:my-8 md:px-12 p-4">
        <CarouselContextProvider
          duration={600}
          autoRun={4000}
        >
          <div className="relative mx-auto">
            <CarouselControlPrev 
              size="2rem"
              className="hidden md:flex w-[15%] items-center justify-end border-0 bg-none text-center text-white-strong opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none" 
            />
            <figure className="relative w-fit m-auto">
              <Image
                src={mobileFrame}
                role="presentation"
                alt="A mobile phone."
                className="hidden md:block relative z-10"
              />
              <CarouselContainer
                className="md:absolute md:w-[89%] md:h-[92%] md:top-[4%] md:left-[5.5%] md:object-cover"
                items={[
                  <Image
                    className="block w-full"
                    src={fairieHome}
                    alt="F.A.I.R.I.E. simulates an AI companion to assist players through their journey in The Index franchise."
                  />,
                  <Image
                    className="block w-full"
                    src={fairieTerminal}
                    alt="F.A.I.R.I.E. let players immerse themselves as hackers through its own command line interface, where they can search for clues using commands like 'search' or 'connect'."
                  />,
                  <Image
                    className="block w-full"
                    src={fairiePhone}
                    alt="Players can use phone numbers they might have gathered through the app, or any other source from the Index universe to listen phone records from the in-world characters."
                  />
                ]} />
                <Indicators 
                  className="list-none absolute bottom-[4%] md:bottom-[6%] right-[5.5%] left-[5.5%] z-[15] flex justify-center"
                  indicatorClassName="relative z-[16] mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white-strong bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  activeClassName="relative z-[16] mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white-strong bg-clip-padding p-0 -indent-[999px] opacity-100 transition-opacity ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                />
            </figure>
            <CarouselControlNext 
              size="2rem"
              className="hidden md:flex w-[15%] items-center justify-start border-0 bg-none text-center text-white-strong opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none" 
            />
          </div>
        </CarouselContextProvider>
      </div>
      <div className="md:flex-1 mb-8 my-8 p-4 md:px-36 md:mt-40">
          <h2 className="text-2xl text-white-weak mb-8">
            <strong>F.A.I.R.I.E.</strong> is a web application that plays interactive stories.
          </h2>
          <p className="mb-4"> 
            It revolves around the concept of <em>social engineering</em> and allows its users to communicate with the characters from the world of <em>The Index</em> through fake emails and phone calls.
          </p>
          <p>
            It also let the players search for clues through a <em>command line interface</em> and hacking inspired mini-games!
          </p>
      </div>
    </section>
    <section className="my-8 p-4 md:max-w-4xl md:mx-auto">
      <h2 className="text-2xl font-bold">Technical overview:</h2>
      <p className="text-xl font-semibold mb-8">Using web technologies to tell stories</p>
      <p className="mb-4">
        F.A.I.R.I.E. is a web application made with <strong>React</strong> and <strong>Styled Components</strong>. It reads stories written in the <a href="https://yarnspinner.dev/">Yarn Spinner</a> syntax that are stored in Google's Cloud Service through the <strong>FireBase</strong> 
      </p>
      <p>
        The project was made possible through the vigilant overseeing of <a href="https://www.swordmonkey.com">Swordmonkey Studios</a>. As well as the <a href="https://github.com/mnbroatch/yarn-bound">Yarn Bound</a> library, maintained by <a href="https://github.com/mnbroatch">Matthew Broatch</a>.
      </p>
    </section>
  </Layout>)
}