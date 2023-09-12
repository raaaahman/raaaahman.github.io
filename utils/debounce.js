export default function debounce(callback, delay) {
  let running = false

  return (...args) => {
    if (running) return
    running = true

    let value
    const timeout = setTimeout(() => {
      value = callback(...args)
      clearTimeout(timeout)
      running = false
    }, delay)

    return value
  }
}