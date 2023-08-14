import CarouselContainer from './CarouselContainer'
import CarouselContextProvider from './CarouselContext'

export default function Carousel({ children, ...props }) {
  return (<CarouselContextProvider>
    <CarouselContainer {...props}>
      {children}
    </CarouselContainer>
  </CarouselContextProvider>)
}