'use client'
import { useEffect, useId } from 'react'

import { useCarousel } from "./CarouselContext"
import { carouselJumpTo, carouselUpdateItems } from "./actions"

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
  }, [state.items])

  return (<ol 
    role="tablist" 
    {...props}
  >
    {state.items.map(
      (item, index) => {
        return (<li key={index}>
          <button
            id={item.tabId}
            type="button"
            role="tab"
            aria-controls={item.panelId}
            aria-selected={index === state.activeItemId}
            aria-label={'Slide ' + (index + 1)}
            className={index === state.desiredItemId ? activeClassName : indicatorClassName}
            style={{ transitionDuration: config.duration }}
            onClick={createHandler(index)}
          >
          </button>
        </li>
        )
      }
    )}
  </ol>)
}