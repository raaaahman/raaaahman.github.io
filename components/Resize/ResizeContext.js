import { createContext, useContext } from 'react'

const ResizeContext = createContext()

export default ResizeContext

export function useResize() {
  const size = useContext(ResizeContext)

  if (typeof size === 'undefined') {
    throw new Error('useResize can only be called inside a ResizeContainer.')
  }

  return size
}