'use client'
import { useCarousel } from "./CarouselContext"
import { carouselJumpTo } from "./actions"

export default function Indicators({ indicatorClassName, activeClassName, ...props }) {
  const { config, state, dispatch } = useCarousel()

  const createHandler = (index) => {
    return () => dispatch(carouselJumpTo(index))
  }

  return (<ol {...props}>
    {state.items.map(
      (item, index) => {
        return (<li key={index}>
          <button
            type="button"
            aria-current={index === state.activeItemId}
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