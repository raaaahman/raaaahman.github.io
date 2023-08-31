import { useRef, useEffect } from 'react'

// Copied from useHooks library
// @see https://github.com/uidotdev/usehooks/blob/e5d445ead108b57e081fd1177f440b05ebc5d184/index.js#L101

export default function useClickAway(callback) {
  const ref = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event)
      }
    }

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [])

  return ref
}