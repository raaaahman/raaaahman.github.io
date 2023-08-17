'use client'
import { useEffect } from 'react'
import { useCarousel } from './CarouselContext'
import { CAROUSEL_SLIDE_DIRECTION_NEXT, carouselLoadItems, carouselSlide, carouselTransitionEnd } from './actions'

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

  return (<div {...props}>
    <div
      className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']"
    >
      {items.map((item, index, items) => {
        const isActive = index === state.activeItemId
        const isLeft = state.desiredItemId - 1 === index || state.desiredItemId === 0 && index === items.length - 1
        const isRight = state.desiredItemId + 1 === index || state.desiredItemId === items.length - 1 && index === 0
        const isDesired = index === state.desiredItemId
        
        return (<div
          key={index}
          className={`relative float-left -mr-[100%] ${isActive || isDesired ? 'visible' : 'invisible' } ${isLeft ? '-translate-x-full' : '' } ${isRight ? 'translate-x-full' : '' } ${isDesired ? 'translate-x-0' : '' } w-full h-full transition-transform ease-in-out`}
          style={{ backfaceVisibility: 'hidden', transitionDuration: duration + 'ms' }}
        >
          {item}
        </div>)
      })}
    </div>
    {children}
  </div>)
}