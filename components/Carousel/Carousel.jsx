'use client'
import { useEffect, useRef, useId } from 'react'
import { Carousel as TECarousel } from 'tw-elements'

export default function Carousel({ children, items, controls, ...props }) {
  const id = useId()
  const elementRef = useRef()

  useEffect(() => {
    if (elementRef.current) {
      const carousel = new TECarousel(elementRef.current, { ride: 'carousel' })

      console.log(carousel._items)
  
      return () => {
        carousel.dispose()
      }
    }
  }, [])

  return (<div
    id={id}
    ref={elementRef}
    data-te-carousel-init
    className="rounded-[5%] w-[92%] h-[90%] top-[4.5%] left-[5%]"
    {...props}
  >
    <div
      className="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
    >
      {/* {items.map((item, index) => (<div
        className={`relative float-left -mr-[100%] ${index === 0 ? '' : 'hidden'} w-full transition-transform duration-[600ms] ease-in-out`}
        key={index}
        data-te-carousel-item
        data-te-carousel-active={index === 0}
        style={{ backfaceVisibility: 'hidden' }}
      >
        {item}
      </div>))} */}
      {children}
    </div>
    <button
      className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none text-center text-white opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none"
      type="button"
      data-te-slide="prev"
      data-te-target={id}
    >
      Previous
    </button>
    <button
      className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none text-center text-white opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none"
      type="button"
      data-te-slide="next"
      data-te-target={id}
    >
      Next
      </button>
  </div>)
}