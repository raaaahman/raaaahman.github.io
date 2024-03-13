import Head from "next/head";
import Image from "next/image";

import SkillList from "../../components/SkillList";
import Layout from "../../components/Layout";
import mobileFrame from "../../public/images/mobile-frame.png";
import sunnyNewWorld001 from "../../public/images/sunny-new-world-001.png";
import sunnyNewWorld002 from "../../public/images/sunny-new-world-002.png";
import sunnyNewWorld003 from "../../public/images/sunny-new-world-003.png";
import CarouselContainer from "../../components/Carousel/CarouselContainer";
import {
  CarouselControlNext,
  CarouselControlPrev,
} from "../../components/Carousel/CarouselControls";
import CarouselContextProvider from "../../components/Carousel/CarouselContext";
import CarouselPickerControls from "../../components/Carousel/CarouselPickerControls";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import CarouselRotationControl from "../../components/Carousel/CarouselRotationControl";
import CarouselOuterContainer from "../../components/Carousel/CarouselOuterContainer";
import ShaderCanvas from "../../components/ShaderCanvas";

export default function SunyNewWorldProject() {
  return (
    <Layout className="relative lg:flex lg:flex-wrap md:overflow-x-hidden md:overflow-y-visible">
      <Head>
        <title>Sunny New World | Sylvain Schellenberger</title>
        <meta
          name="description"
          content="A cooperative multiplayer game about rebuilding civilization with renewable energy."
        />
        <meta property="og:image" content="/images/sunny-new-world-002.png" />
        <meta
          name="og:title"
          content="Sunny New World, a cooperative multiplayer game."
        />
      </Head>

      <section id="intro" className="relative z-[5] top-left-section">
        <h1 className="page-title">Sunny New World</h1>
        <p className="text-justify mb-4">
          The game was made during{" "}
          <a href="https://reactjam.com/">ReactJam Winter 2023</a> and published
          on the <a href="https://developers.rune.ai/blog">Rune</a> platform.
        </p>
        <p className="text-justify mb-4">
          Sunny New World is a cooperative <strong>multiplayer game</strong> in
          which players rebuild a civilization by carefully placing landscapes
          and structures to harvest renewable energy, while avoiding
          accumulating too much pollution.
        </p>
      </section>
      <section className="relative z-[5] top-right-section">
        <h2 className="text-2xl text-center font-extrabold">
          Technologies In Use
        </h2>
        <SkillList
          skills={[
            { name: "TypeScript", value: 75 },
            { name: "TailwindCSS", value: 45 },
            { name: "React", value: 55 },
            { name: "React Three Fiber", value: 65 },
            { name: "Rune SDK", value: 85 },
            { name: "Vite", value: 35 },
          ]}
        />
      </section>

      <section className="relative z-[5] lg:max-w-6xl lg:mx-auto lg:flex">
        <div className="lg:flex-1 mb-8 my-8 p-4 lg:px-36 lg:mt-40 lg:order-1">
          <AnimateOnScroll
            threshold={[0.2]}
            idleClassName="motion-safe:md:[&>*]:idle-slide-in-left"
            animateClassName="motion-safe:md:[&>*]:animate-slide-in"
          >
            <h2 className="text-2xl text-white-weak mb-8">
              <strong>Sunny New World</strong> is played from 2 to 4 players.
              Each player draw tiles that they can place adjacent to existing
              tiles during they turn.
            </h2>
            <p className="mb-4">
              Since they might have tiles that produces resources the other
              player may need, they should collaborate to place these tiles
              where they are the most needed.
            </p>
            <p>
              Each placed tile can generate or remove pollution, if too much
              pollution is accumulated, then it's game over for everyone. Score
              depends on tiles like human habitats, forest and oceans.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="lg:flex-1 lg:my-8 lg:px-12 p-4 lg:oreder-0">
          <CarouselContextProvider duration={600} autoRun={4000}>
            <AnimateOnScroll
              threshold={[0.2]}
              idleClassName="motion-safe:md:[&>*]:idle-slide-in-right"
              animateClassName="motion-safe:md:[&>*]:animate-slide-in"
            >
              <div className="relative mx-auto">
                <CarouselOuterContainer className="relative w-fit m-auto">
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
                        src={sunnyNewWorld001}
                        alt="Players starts with a single habitat tile."
                        unoptimized
                      />,
                      <Image
                        className="block w-full"
                        src={sunnyNewWorld002}
                        alt="They place landscapes and structures tiles adjacent to the existing tiles."
                        unoptimized
                      />,
                      <Image
                        className="block w-full"
                        src={sunnyNewWorld003}
                        alt="As they place more and more tiles, pollution starts to accumulate."
                        unoptimized
                      />,
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
          <p className="text-xl font-semibold mb-8">
            Teach collaboration through shared resources
          </p>
          <p className="mb-4">
            The game was made with <strong>React Three Fiber</strong> and the{" "}
            <strong>Rune SDK</strong>. This allowed for server state
            synchronization and optimized rendering of complex 3D scenes.
          </p>
          <p>
            The UI is made with <strong>React</strong> and{" "}
            <strong>Tailwind CSS</strong>, which allowed for fast iteration in
            the context of a tightly scheduled <em>game jam</em>.
          </p>
        </AnimateOnScroll>
      </section>
      <ShaderCanvas
        fragmentUrl="/scripts/borealis.frag"
        className="absolute bottom-0 w-full min-h-[320px] box-border skew-y-3 -translate-y-12 rounded-3xl"
      />
    </Layout>
  );
}
