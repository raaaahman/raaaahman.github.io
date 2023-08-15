'use client'
import { useCarousel } from "./CarouselContext"
import { CAROUSEL_SLIDE_DIRECTION_NEXT, CAROUSEL_SLIDE_DIRECTION_PREV, carouselSlide } from "./actions"

export function CarouselControlPrev({ ...props }) {
  const { dispatch } = useCarousel()

  const handleClick = () => {
    dispatch(carouselSlide(CAROUSEL_SLIDE_DIRECTION_PREV))
  }

  return (<button
    className="absolute bottom-0 left-0 top-0 z-10 flex w-[15%] items-center justify-center border-0 bg-none text-center text-white opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    onClick={handleClick}
    {...props}
  >
    Previous
  </button>)
}

export function CarouselControlNext({ ...props }) {
  const { dispatch } = useCarousel()

  const handleClick = () => {
    dispatch(carouselSlide(CAROUSEL_SLIDE_DIRECTION_NEXT))
  }

  return (<button
    className="absolute bottom-0 right-0 top-0 z-10 flex w-[15%] items-center justify-center border-0 bg-none text-center text-white opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    onClick={handleClick}
    {...props}
  >
    Next
  </button>)
}