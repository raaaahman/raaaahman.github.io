'use client'
import { useEffect, useId, useRef } from 'react'

import { useCarousel } from "./CarouselContext"
import { carouselJumpTo, carouselUpdateItems, carouselSlide, CAROUSEL_SLIDE_DIRECTION_NEXT, CAROUSEL_SLIDE_DIRECTION_PREV } from "./actions"

export default function CarouselPickerControls({ indicatorClassName, activeClassName, ...props }) {
  const { config, state, dispatch } = useCarousel()

  const createHandler = (index) => {
    return () => dispatch(carouselJumpTo(index))
  }

  const tablistId = useId()

  useEffect(() => {
    const newItems = state.items.map(
      (item, index) => ({ 
        tabId: tablistId + '-tab-' + index,
        panelId: tablistId + '-panel-' + index, 
        ...item 
      })
    )
    dispatch(carouselUpdateItems(newItems))
  }, [])

  const listRef = useRef()

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft' || event.code === 0xe04b) {
      event.preventDefault()
      dispatch(carouselSlide(CAROUSEL_SLIDE_DIRECTION_PREV))
      listRef.current?.children[(state.activeItemId || state.items.length) - 1].focus()
    } else if (event.key === 'ArrowRight' || event.code === 0xe04d) {
      event.preventDefault()
      dispatch(carouselSlide(CAROUSEL_SLIDE_DIRECTION_NEXT))
      listRef.current?.children[(state.activeItemId + 1) % state.items.length].focus()
    } 
  }

  return (<ol 
    ref={listRef}
    role="tablist"
    onKeyDown={handleKeyDown}
    {...props}
  >
    {state.items.map(
      (item, index) => {
        const isActiveTab = index === state.activeItemId

        return (<li key={index}
            id={item.tabId}
            tabindex={isActiveTab ? 0 : -1}
            type="button"
            role="tab"
            aria-controls={item.panelId}
            aria-selected={isActiveTab}
            aria-label={'Slide ' + (index + 1)}
            className={index === state.desiredItemId ? activeClassName : indicatorClassName}
            style={{ transitionDuration: config.duration }}
            onClick={createHandler(index)}
          />
        )
      }
    )}
  </ol>)
}