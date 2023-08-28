import { useRef, useState, useEffect } from 'react'


export default function AnimateOnScroll({ 
  children,
  root = null,
  rootMargin = '0%',
  threshold = 1,
  className,
  idleClassName, 
  animateClassName,
  ...props 
}) {
  const elementRef = useRef()
  const [ isVisible, setIsVisible ] = useState(false)

  useEffect(() => {
    if (!elementRef.current || typeof IntersectionObserver !== 'function') return 

    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (threshold instanceof Array && entries.find(entry => entry.intersectionRatio > threshold[0]) ||
        typeof threshold === 'number' && entries.find(entry => entry.intersectionRatio > threshold)) {
          setIsVisible(true)
        }
      },
      {
        root,
        rootMargin,
        threshold
      }
    )

    observer.observe(elementRef.current)

    return () => {
      setIsVisible(false)
      observer.disconnect()
    }
  }, [elementRef.current])
   
  return (<div ref={elementRef} className={(isVisible ? animateClassName : idleClassName) + ' ' + className} {...props}>
    {children}
  </div>)
}