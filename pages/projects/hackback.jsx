import Head from 'next/head'
import Image from 'next/image'

import SkillList from '../../components/SkillList'
import Layout from '../../components/Layout'
import laptopFrame from '../../public/images/laptop-frame.png'
import mobileFrame from '../../public/images/mobile-frame.png'
import CarouselContainer from '../../components/Carousel/CarouselContainer'
import { CarouselControlNext, CarouselControlPrev } from '../../components/Carousel/CarouselControls'
import CarouselContextProvider from '../../components/Carousel/CarouselContext'
import CarouselPickerControls from '../../components/Carousel/CarouselPickerControls'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import CarouselRotationControl from '../../components/Carousel/CarouselRotationControl'
import CarouselOuterContainer from '../../components/Carousel/CarouselOuterContainer'
import hackbackHomeScreen from '../../public/images/hackback_homescreen.png'
import hackbackWhisperMeeting from '../../public/images/hackback_whispermeeting.png'
import hackbackFlemmyNFT from '../../public/images/hackback_flemmynft.png'
import hackbackWhisperNFT from '../../public/images/hackback_whispernft.png'

export default function HackBackProject() {
  return (<Layout className="relative lg:flex lg:flex-wrap md:overflow-x-hidden md:overflow-y-visible">
    <Head>
      <title>Hack Back | Sylvain Schellenberger</title>
      <meta
        name="description"
        content="An interactive fiction about techno-conspiracies and social engineering. Made for GitHub Game Off 2024"
      />
      <meta
        property="og:image"
        content="/images/hackback_cover.png"
        />
      <meta
        name="og:title"
        content="Hack Back, Interactive Fiction about High School hackers."
      />
    </Head>
    <section id="intro" className="relative z-[5] top-left-section">
      <h1 className="page-title">Hack Back</h1>
      <p className="text-justify mb-4"><a href="https://raaaahman.itch.io/hackback">Hack Back</a> is an <strong>interactive fiction</strong> that puts the player in the shoes of Orion Vale, aka Pulse, as he uncovers a techno-consipracy running inside his High School.</p>
      <p className="mb-4">Its explores themes such as <strong>spying softwares</strong>, <strong>social engineering</strong> and <strong>agentic artificial intelligences</strong> through a smartphone like interface, allowing the player to chat, impersonate, and even blackmail fictional characters.</p>
      <p>It was made for the <a href="https://github.blog/tag/game-off/">GitHub Game Off 2024</a> game jam and the theme was: Secrets.</p>
    </section>
    <section className="relative z-[5] top-right-section">
      <h2 className="text-2xl text-center font-extrabold">Technologies In Use</h2>
      <SkillList
        skills={[
          { name: 'TailwindCSS', value: 55 },
          { name: 'DaisyUI', value: 35 },
          { name: 'TypeScript', value: 80 },
          { name: 'React', value: 95 },
          { name: 'YarnBound', value: 75 },
          { name: 'Valtio', value: 50 },
          { name: 'TanStack Router', value: 35 },
          { name: 'Vite', value: 45 },
          { name: 'Vitest', value: 55 },
          { name: 'Playwright', value: 15 }
        ]}
      />
    </section>
    <section className="relative z-[5] hidden md:block">
      <CarouselContextProvider
        duration={600}
        autoRun={4000}
      >
        <AnimateOnScroll
          threshold={[0.2]}
          idleClassName="motion-safe:md:[&>*]:idle-slide-in-left"
          animateClassName="motion-safe:md:[&>*]:animate-slide-in"
        >
          <h2 className="invisible">Screenshots</h2>
          <CarouselOuterContainer className="relative">
            <Image
              src={laptopFrame}
              alt="Portable computer."
              role="presentation"
              className="hidden lg:block relative z-10"
              unoptimized
            />
            <CarouselContainer
              aria-label="Desktop screenshots"
              className="lg:absolute lg:w-[76%] lg:h-[76%] lg:top-[9%] lg:left-[12%] lg:object-cover lg:object-center"
              items={[
                <Image
                  className="block w-full h-full object-cover"
                  src={hackbackHomeScreen}
                  alt="Hack Back looks like a smartphone / tablet Operating System, with a few social applications on it."
                  unoptimized
                />,
                <Image
                  className="block w-full h-full object-cover"
                  src={hackbackWhisperMeeting}
                  alt="The player will be put in touch with shady individuals of dubious motivations... or become one themself!"
                  unoptimized
                />
              ]}
            >
              <CarouselRotationControl
                className="absolute top-[2%] right-[4%] z-20 text-white-strong opacity-50 hover:opacity-100"
                iconClassName="md:w-8 md:h-8 w-6 h-6"
              />
              <CarouselControlPrev 
                className="flex w-[10%] lg:w-[15%] lg:-ml-[15%] lg:z-[15] items-center justify-center border-0 bg-none text-center text-white-strong opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none" 
                iconClassName="lg:w-12 lg:h-12 w-8 h-8"
              />
              <CarouselPickerControls
                aria-label="Choose a slide"
                className="list-none absolute bottom-[3%] w-full lg:bottom-[5%] z-[15] flex justify-center"
                indicatorClassName="relative z-[16] mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white-strong bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                activeClassName="relative z-[16] mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white-strong bg-clip-padding p-0 -indent-[999px] opacity-100 transition-opacity ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              />
              <CarouselControlNext 
                className="flex w-[10%] lg:w-[15%] lg:-mr-[15%] lg:z-[15] items-center justify-center border-0 bg-none text-center text-white-strong opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                iconClassName="lg:w-12 lg:h-12 w-8 h-8"
              />
            </CarouselContainer>
          </CarouselOuterContainer>
        </AnimateOnScroll>
      </CarouselContextProvider>
    </section>
    <section className="relative z-[5] lg:max-w-6xl lg:mx-auto lg:flex">
    <div className="lg:flex-1 mb-8 my-8 p-4 lg:px-36 lg:mt-40 lg:order-1">
        <AnimateOnScroll
          threshold={[0.2]}
          idleClassName="motion-safe:md:[&>*]:idle-slide-in-left"
          animateClassName="motion-safe:md:[&>*]:animate-slide-in"
        >
            <h2 className="text-2xl text-white-weak mb-8">
              <strong>Hack Back</strong> is an Interactive Fiction built as a web application.
            </h2>
            <p className="mb-4"> 
              It revolves around the concept of <em>social engineering</em> and allows its users to communicate with fictional characters from the Redwood High School through a chat interface.
            </p>
            <p>
              It also features fake <em>agentic Aterficial Intelligences</em> that can intervene in the discussions.
            </p>
        </AnimateOnScroll>
      </div>
      <div className="lg:flex-1 lg:my-8 lg:px-12 p-4 lg:oreder-0">
        <CarouselContextProvider
          duration={600}
          autoRun={4000}
        >
          <AnimateOnScroll
            threshold={[0.2]}
            idleClassName="motion-safe:md:[&>*]:idle-slide-in-right"
            animateClassName="motion-safe:md:[&>*]:animate-slide-in"
          >
            <div className="relative mx-auto">
              <CarouselOuterContainer
                className="relative w-fit m-auto"
              >
                <Image
                  src={mobileFrame}
                  role="presentation"
                  alt="A mobile phone."
                  className="hidden md:block relative z-10"
                  unoptimized
                />
                <CarouselContainer
                  aria-label="Mobile screenshots"
                  className="md:absolute md:w-[89%] md:h-[92%] md:top-[4%] md:left-[5.5%] md:object-cover"
                  items={[
                    <Image
                      className="block w-full"
                      src={hackbackFlemmyNFT}
                      alt="Flemmy is the agentic Artificial Intelligence that the player can ask to do various tasks."
                      unoptimized
                    />,
                    <Image
                      className="block w-full"
                      src={hackbackWhisperNFT}
                      alt="As the game progresses, the player gets entangled into several discussions to solve the mystery of the Redwood High School."
                      unoptimized
                    />
                  ]}
                >
                  <CarouselRotationControl
                    className="absolute top-[2%] right-[8%] z-[15] text-white-strong opacity-50 hover:opactiy-100"
                    iconClassName="md:w-8 md:h-8 w-6 h-6"
                  />
                  <CarouselControlPrev 
                    className="hidden md:flex w-[15%] -ml-[22.5%] items-center justify-end border-0 bg-none text-center text-white-strong opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none" 
                    iconClassName="md:w-10 md:h-10 w-8 h-8"
                  />
                  <CarouselPickerControls 
                    aria-label="Choose a slide"
                    className="list-none absolute bottom-[4%] lg:bottom-[6%] right-[5.5%] left-[5.5%] z-[15] flex justify-center"
                    indicatorClassName="relative z-[16] mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white-strong bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    activeClassName="relative z-[16] mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white-strong bg-clip-padding p-0 -indent-[999px] opacity-100 transition-opacity ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  />
                  <CarouselControlNext
                    className="hidden md:flex w-[15%] -mr-[22.5%] items-center justify-start border-0 bg-none text-center text-white-strong opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none" 
                    iconClassName="md:w-10 md:h-10 w-8 h-8"
                  />
                </CarouselContainer>
              </CarouselOuterContainer>
            </div>
          </AnimateOnScroll>
        </CarouselContextProvider>
      </div>
    </section>
    <section className="relative z-[5] my-8 p-4 lg:max-w-4xl lg:mx-auto md:mb-40">
      <AnimateOnScroll
        threshold={[0.2]}
        idleClassName="motion-safe:md:[&>*]:idle-slide-in-left"
        animateClassName="motion-safe:md:[&>*]:animate-slide-in"
      >
        <h2 className="text-2xl font-bold">Technical overview:</h2>
        <p className="text-xl font-semibold mb-8">A chat interface powered by an Interactive Fiction engine.</p>
        <p className="mb-4">
          Hack Back is a web application made with <strong>React</strong> and <strong>Tailwind CSS</strong>. It displays a story written in the <a href="https://yarnspinner.dev/">Yarn Spinner</a> syntax that is processed through the <a href="https://github.com/mnbroatch/yarn-bound">Yarn Bound</a> JavaScript library, maintained by <a href="https://github.com/mnbroatch">Matthew Broatch</a>.
        </p>
        <p className="mb-4">It uses <a href="https://github.com/pmndrs/valtio">Valtio</a> as a state management library to make a bridge between the <em>mutable state</em> of the YarnBound library and the <em>one way data binding</em> of React applications.</p>
        <p>
          The project was made in collaboration with the UX Designer <a href="https://endipons.com/">Endi Pons</a> that took the responsibility of conceiving and writing the whole story.
        </p>
      </AnimateOnScroll>
    </section>
  </Layout>)
}