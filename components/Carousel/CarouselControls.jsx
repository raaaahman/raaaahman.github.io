'use client'
import { useCarousel } from "./CarouselContext"
import { CAROUSEL_SLIDE_DIRECTION_NEXT, CAROUSEL_SLIDE_DIRECTION_PREV, carouselSlide } from "./actions"

export function CarouselControlPrev({ className, iconClassName, ...props }) {
  const { dispatch } = useCarousel()

  const handleClick = () => {
    dispatch(carouselSlide(CAROUSEL_SLIDE_DIRECTION_PREV))
  }

  return (<button
    type="button"
    onClick={handleClick}
    className={'absolute bottom-0 left-0 top-0 z-20 ' + className}
    {...props}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClassName ?? 'w-6 h-6'}>
      <title>Previous</title>
      <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
    </svg>
  </button>)
}

export function CarouselControlNext({ className, iconClassName, ...props }) {
  const { dispatch } = useCarousel()

  const handleClick = () => {
    dispatch(carouselSlide(CAROUSEL_SLIDE_DIRECTION_NEXT))
  }

  return (<button
    type="button"
    onClick={handleClick}
    className={'absolute bottom-0 right-0 top-0 z-20 ' + className}
    {...props}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconClassName ?? 'w-6 h-6'}>
      <title>Next</title>
      <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
    </svg>
  </button>)
}