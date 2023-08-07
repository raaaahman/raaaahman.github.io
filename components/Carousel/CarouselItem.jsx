export default function CarouselItem({ children, isActive, ...props }) {
  return (<div
    className={`relative float-left -mr-[100%] ${isActive ? '' : 'hidden'} w-full transition-transform duration-[600ms] ease-in-out`}
    data-te-carousel-item
    data-te-carousel-active={isActive}
    style={{ backfaceVisibility: 'hidden' }}
    {...props}
  >
    {children}
  </div>)
}