import { useState, useEffect, useRef, useMemo } from 'react'

import debounce from '../../utils/debounce'
import SizeContext from './ResizeContext'

export function ResizeContainer({ children, renderContainer, ...props }) {
  const [ width, setWidth ] = useState()
  const [ height, setHeight ] = useState()

  const ref = useRef()

  useEffect(() => {
    const observer = new ResizeObserver(
      debounce(
        entries => {
          entries.forEach(
            entry => {
              if (entry.target === ref.current) {
                setWidth(entry.target.scrollWidth)
                setHeight(entry.target.scrollHeight)
              }
            }
          )
        }, 150
      )
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  const size = useMemo(() => ({
    width,
    height
  }), [width, height])

  return (<SizeContext.Provider value={size}>
    {typeof renderContainer === 'function'
      ? renderContainer({ ref, children, containerWidth: width, containerHeight: height, ...props })
      : (<div
        ref={ref}
        style={{
          width: containerWidth,
          height: containerHeight
        }}
        {...props}
      >
        {children}
      </div>)
    }
  </SizeContext.Provider>)
}