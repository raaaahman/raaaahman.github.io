import { useState } from 'react'

import { carouselStartRotation, carouselStopRotation } from './actions'
import { useCarousel } from './CarouselContext'

export default function CarouselOuterContainer({ children, ...props }) {
  const [ hasEntered, setHasEntered ] = useState(false)

  const { state, dispatch } = useCarousel()

  const handleMouseOver = () => {
    if (hasEntered) return
    
    setHasEntered(true)
    dispatch(carouselStopRotation())
  }

  const handleMouseLeave = () => {
    setHasEntered(false)

    if (!state.isRotating) dispatch(carouselStartRotation())
  }

  return (<figure
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseLeave}
    {...props}
  >
    {children}
  </figure>)
}