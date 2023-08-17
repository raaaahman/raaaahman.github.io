'use client'
import { useMemo, createContext, useContext, useReducer } from 'react'

import { CAROUSEL_JUMP_TO, CAROUSEL_LOAD_ITEMS, CAROUSEL_SLIDE, CAROUSEL_SLIDE_DIRECTION_PREV, CAROUSEL_TRANSITION_END } from './actions'

export const CarouselContext = createContext({})

function carouselReducer(state, action) {
  const { type, payload } = action

  switch(type) {
    case CAROUSEL_LOAD_ITEMS:
      return {
        ...state,
        items: payload.items,
        autoRun: payload.autoRun | state.autoRun,
        activeItemId: 0,
        desriedItemId: 0,
      }
    case CAROUSEL_SLIDE:
      const newDesiredItemId = payload === CAROUSEL_SLIDE_DIRECTION_PREV
        ? (state.activeItemId || state.items.length) - 1
        : (state.activeItemId + 1) % state.items.length

      return {
        ...state,
        desiredItemId: newDesiredItemId,
      }
    case CAROUSEL_TRANSITION_END:
      return {
        ...state,
        activeItemId: state.desiredItemId
      }
    case CAROUSEL_JUMP_TO:
      return payload < state.items.length && payload >= 0
        ? {
          ...state,
          desiredItemId: payload
        }
        : state
    default:
      return state
  }
}

export function useCarousel() {
  const carousel = useContext(CarouselContext)

  if (!carousel) {
    throw new Error('Carousel components cannot be rendered outide a Carousel context.')
  }

  return carousel
}

export default function CarouselContextProvider({ duration, autoRun, children }) {
  const config = {
    duration,
    autoRun
  }

  const [ state, dispatch ] = useReducer(carouselReducer, {
    items: [],
    activeItemId: 0,
    desiredItemId: 0,
    autoRun: false
  })

  const context = useMemo(
    () => ({ config, state, dispatch }),
    [state]
  )

  return (<CarouselContext.Provider value={context}>
    {children}
  </CarouselContext.Provider>)
}
