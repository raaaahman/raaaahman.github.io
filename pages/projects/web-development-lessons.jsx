import Head from 'next/head'
import Image from 'next/image'

import SkillList from '../../components/SkillList'
import Layout from '../../components/Layout'
import laptopFrame from '../../public/images/laptop-frame.png'
import webDevelopmentLessons001 from "../../public/images/web-development-lessons-001.png";
import webDevelopmentLessons002 from "../../public/images/web-development-lessons-002.png";
import webDevelopmentLessons004 from "../../public/images/web-development-lessons-004.png";
import webDevelopmentLessons005 from "../../public/images/web-development-lessons-005.png";
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

export default function WebDevelopmentLessonsProject() {
  return (
    <Layout className="relative lg:flex lg:flex-wrap md:overflow-x-hidden md:overflow-y-visible">
      <Head>
        <title>Web Development Lessons | Sylvain Schellenberger</title>
        <meta
          name="description"
          content="A full course on front-end web development built for live lectures."
        />
        <meta
          property="og:image"
          content="/images/web-development-lessons-001.png"
        />
        <meta
          name="og:title"
          content="Web DEvelopment Lessons by Sylvain Schellenberger"
        />
      </Head>
      <section id="intro" className="relative z-[5] top-left-section">
        <h1 className="page-title">Web Development Lessons</h1>
        <p className="text-justify mb-4">
          Starting in 2021, I gave live lecture in different private school to
          teach front-end web development, not only to IT students, but to
          marketing and graphic design students as well.
        </p>
        <p className="text-justify mb-4">
          I was in complete charge of the educative process, from selecting the
          topics to teach in the given time frame, producing the learning
          materials, animating the live sessions, to evaluating the progress of
          students. I even made some interactive exercises so students could
          learn at their own pace, inside as well as outside of class.
        </p>
      </section>
      <section className="relative z-[5] top-right-section">
        <h2 className="text-2xl text-center font-extrabold">
          Technologies In Use
        </h2>
        <SkillList
          skills={[
            { name: "MarkDown", value: 95 },
            { name: "Draw.io (Diagrams.net)", value: 75 },
            { name: "CSS", value: 60 },
            { name: "JavaScript", value: 40 },
            { name: "Reveal.js", value: 20 },
            { name: "Git", value: 50 },
          ]}
        />
      </section>
      <section className="relative z-[5] hidden md:block">
        <CarouselContextProvider duration={600} autoRun={4000}>
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
                    src={webDevelopmentLessons001}
                    alt="A slide of the front-end development course."
                    unoptimized
                  />,
                  <Image
                    className="block w-full h-full object-cover"
                    src={webDevelopmentLessons002}
                    alt="A slide of the front-end development course."
                    unoptimized
                  />,
                  <Image
                    className="block w-full h-full object-cover"
                    src={webDevelopmentLessons004}
                    alt="A slide of the front-end development course."
                    unoptimized
                  />,
                  <Image
                    className="block w-full h-full object-cover"
                    src={webDevelopmentLessons005}
                    alt="A slide of the front-end development course."
                    unoptimized
                  />,
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

      <section className="relative z-[5] my-8 p-4 lg:max-w-4xl lg:mx-auto md:mb-40">
        <AnimateOnScroll
          threshold={[0.2]}
          idleClassName="motion-safe:md:[&>*]:idle-slide-in-left"
          animateClassName="motion-safe:md:[&>*]:animate-slide-in"
        >
          <h2 className="text-2xl font-bold">Pedagogy overview:</h2>
          <p className="text-xl font-semibold mb-8">Practice makes permanent</p>
          <p className="mb-4">
            Learning is a hard tasks, and attention spans are getting shorter
            and shorter through generations. So I focused on letting students{" "}
            <strong>practice</strong> their newly learned skills. I've tried to
            keep my top-down share of information to a minimal length, trying to
            make it as visual as I could, including schemas, visual analogies
            and some animations.
          </p>
          <p>
            Having breaks from the course to let students practice was crucial,
            as I was able to see how each one learn at a different pace and
            through different means. Evaluating often to let them gauge their
            own progress was also some method I discovered on the job.
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