import { useRef, useState, useEffect } from 'react'


export default function AnimateOnScroll({ 
  children,
  root,
  rootMargin,
  threshold,
  idleClassName, 
  animateClassName,
  ...props 
}) {
  const elementRef = useRef()
  const [ isVisible, setIsVisible ] = useState(false)

  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.find(entry => entry.intersectionRatio > threshold)) {
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
  
      return () => observer.disconnect()
    }
  }, [elementRef.current])
   
  return (<div ref={elementRef} className={isVisible ? animateClassName : idleClassName } {...props}>
    {children}
  </div>)
}