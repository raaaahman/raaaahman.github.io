'use client'
import { useEffect, useRef } from 'react'
import { useCarousel } from './CarouselContext'
import { CAROUSEL_SLIDE_DIRECTION_NEXT, CAROUSEL_SLIDE_DIRECTION_PREV, carouselLoadItems, carouselSlide, carouselTransitionEnd } from './actions'

export default function CarouselContainer({ children, items, ...props }) {
  const { config, state, dispatch } = useCarousel()
  const { autoRun, duration } = config

  useEffect(() => {
    const itemsIds = items.map((item, index) => index)

    dispatch(carouselLoadItems(itemsIds))
  }, [items])

  useEffect(() => {
    if (typeof autoRun === 'number' && state.desiredItemId === state.activeItemId) {
      const autoRunTimeout = setTimeout(() => {
        dispatch(carouselSlide(CAROUSEL_SLIDE_DIRECTION_NEXT))
      }, autoRun)

      return () => {
        clearTimeout(autoRunTimeout)
      }
    }
  }, [autoRun, state.activeItemId, state.desiredItemId])

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(carouselTransitionEnd())
    }, duration)

    return () => {
      clearTimeout(timeout)
    }
  }, [state.desiredItemId])

  // Implementation from https://stackoverflow.com/a/70612770/8137604
  const minSwipeDistance = 50
  const touchStart = useRef(null)
  const touchEnd = useRef(null)

  const handleTouchStart = (event) => {
    touchEnd.current = null
    touchStart.current = event.targetTouches[0].clientX
  }

  const handleTouchMove = (event) => {
    touchEnd.current = event.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart.current - touchEnd.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      dispatch(carouselSlide(CAROUSEL_SLIDE_DIRECTION_NEXT))
    } else if (isRightSwipe) {
      dispatch(carouselSlide(CAROUSEL_SLIDE_DIRECTION_PREV))
    }
  } 

  return (<div 
    role="group"
    aria-roledescription="carousel"
    {...props}
  >
    <div
      aria-atomic="false"
      aria-live={autoRun ? 'off' : 'polite'}
      className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']"
    >
      {items.map((item, index, items) => {
        const isActive = index === state.activeItemId
        const isLeft = state.desiredItemId - 1 === index || state.desiredItemId === 0 && index === items.length - 1
        const isRight = state.desiredItemId + 1 === index || state.desiredItemId === items.length - 1 && index === 0
        const isDesired = index === state.desiredItemId
        
        return (<div
          key={index}
          role="group"
          aria-roledescription="slide"
          aria-label={index + ' out of ' + items.length}
          className={`relative float-left -mr-[100%] ${isActive || isDesired ? 'visible' : 'invisible' } ${isLeft ? '-translate-x-full' : '' } ${isRight ? 'translate-x-full' : '' } ${isDesired ? 'translate-x-0' : '' } w-full h-full transition-transform ease-in-out`}
          style={{ backfaceVisibility: 'hidden', transitionDuration: duration + 'ms' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {item}
        </div>)
      })}
    </div>
    {children}
  </div>)
}