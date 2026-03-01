import Head from 'next/head'
import Image from 'next/image'

import SkillList from '../../components/SkillList'
import Layout from '../../components/Layout'
import laptopFrame from '../../public/images/laptop-frame.png'
import CarouselContainer from '../../components/Carousel/CarouselContainer'
import { CarouselControlNext, CarouselControlPrev } from '../../components/Carousel/CarouselControls'
import CarouselContextProvider from '../../components/Carousel/CarouselContext'
import CarouselPickerControls from '../../components/Carousel/CarouselPickerControls'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import CarouselRotationControl from '../../components/Carousel/CarouselRotationControl'
import CarouselOuterContainer from '../../components/Carousel/CarouselOuterContainer'
import { Testimonial } from '../../components/Testimonial'

import themindplexRoom from '../../public/images/themindplex_room.png'
import themindplexTerminal from '../../public/images/themindplex_terminal.png'
import pixelvision001 from '../../public/images/themindplex_pixelvision001.png'
import pixelvision002 from '../../public/images/themindplex_pixelvision002.png'
import pixelvision003 from '../../public/images/themindplex_pixelvision003.png'
import dbmSpectrumPicture from '../../public/images/DHeusta-small.png'

export default function TheMindplexProject() {
  return (<Layout className="relative lg:flex lg:flex-wrap md:overflow-x-hidden md:overflow-y-visible">
    <Head>
      <title>The MindPlex | Sylvain Schellenberger</title>
      <meta
        name="description"
        content="A website that is part of an Alternate Reality Game, made by DHeusta and a dedicated team."
      />
      <meta
        property="og:image"
        content="/images/themindplex_room.png"
        />
      <meta
        name="og:title"
        content="The Mindplex, Alternate Reality Game in the universe of DHeusta."
      />
    </Head>
    <section id="intro" className="relative z-[5] top-left-section">
      <h1 className="page-title">The Mindplex</h1>
      <p className="text-justify mb-4"><a href="https://themindplex.com/">The Mindplex</a> is part of an <strong>Alternate Reality Game</strong> made around the universe of the musician <a href="https://dheusta.com/">DHeusta</a>. It represents the state of mind of the musician, his creative endeavors and the challenge he faces by letting players poke around an interactive environment that his supposed to be his room.</p>
      <p>It was made by a team of dedicated and proactive people in which I took part to finish the <em>PixelVision</em> game (a game that runs on a fake Operating System).</p>
    </section>
    <section className="relative z-[5] top-right-section">
      <h2 className="text-2xl text-center font-extrabold">Technologies In Use</h2>
      <SkillList
        skills={[
          { name: 'Node.js', value: 20 },
          { name: 'Styled JavaScript', value: 55 },
          { name: 'Phaser', value: 85 },
          { name: 'HTML/CSS', value: 15 }
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
                  src={themindplexRoom}
                  alt="The room that is supposed to be DHeusta's lair. Players can interact with various elements: game bowes, computer, keyboard, recorder..."
                  unoptimized
                />,
                <Image
                  className="block w-full h-full object-cover"
                  src={themindplexTerminal}
                  alt="On the fake Operating System run various programs: a music player, a mail inbox, a terminal and the PixelVision console."
                  unoptimized
                />,
                <Image
                  className="block w-full h-full object-cover"
                  src={pixelvision001}
                  alt="The PixelVision game introduction, a scrolling text on a pixel art background."
                  unoptimized
                />,
                <Image
                  className="block w-full h-full object-cover"
                  src={pixelvision002}
                  alt="The game consists mostly of a succession of dialogue choices, in the interactive fiction fashion."
                  unoptimized
                 />,
                <Image
                  className="block w-full h-full object-cover"
                  src={pixelvision003}
                  alt="Eventually, the player discovers glitches that made them use clues thay found in other parts of the application."
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
    <section className="relative z-[5] my-8 p-4 lg:max-w-4xl lg:mx-auto">
      <AnimateOnScroll
        threshold={[0.2]}
        idleClassName="motion-safe:md:[&>*]:idle-slide-in-left"
        animateClassName="motion-safe:md:[&>*]:animate-slide-in"
      >
        <h2 className="text-2xl font-bold">Technical overview:</h2>
        <p className="text-xl font-semibold mb-8">Using JavaScript to its many possibilities.</p>
        <p className="mb-4">
          The Mindplex is built as a website with interactive images using <strong>DOM manipulation</strong> in JavaScript. It uses a <strong>node.js</strong> server to validate puzzle solutions from players and uses <strong>local storage</strong> to store their rewards on the browser.
        </p>
        <p>
          It contains a <strong>Phaser</strong> browser game that I worked on the finishing touches and bug resolutions. This is a interactive fiction with images and sounds implemented using only Phaser and JavaScript.
        </p>
      </AnimateOnScroll>
    </section>
    <section className="relative z-[5] my-8 p-4 w-full md:mb-40 lg:flex lg:items-stretch lg:justify-center">
      <h2 className="hidden">Testimonials</h2>
      <Testimonial
        className="xl:basis-[50%] xl:shrink-1 xl:grow-0"
        customer={{
          name: "DHeusta",
          picture: dbmSpectrumPicture
        }}
        link={{
          href: "https://www.beatsource.com/label/dbmspectrum/149730",
          label: "beatsource.com/label/DBMSpectrum"
        }}
        preline="Working with Sylvain was an absolute pleasure as he committed to what he said he would do and even went above and beyond in certain areas to make sure the vision happened!"
      >
        I came to him when a prior dev quit and I needed someone quick, and he came to the job picking up the project quickly and then executing the rest of the tasks needed and finished the project according to the deadline we had as a team. Great communicator and easy to work with too keeping it fun and professional!
      </Testimonial>
    </section>
  </Layout>)
}