export const CAROUSEL_LOAD_ITEMS = 'carousel-load-items'
export const CAROUSEL_UPDATE_ITEMS = 'carousel-update-items'
export const CAROUSEL_SLIDE = 'carousel-slide'
export const CAROUSEL_SLIDE_DIRECTION_PREV = 'carousel-slide-prev'
export const CAROUSEL_SLIDE_DIRECTION_NEXT = 'carousel-slide-next'
export const CAROUSEL_TRANSITION_END = 'carousel-transition-end'
export const CAROUSEL_JUMP_TO = 'carousel-jump-to'
export const CAROUSEL_START_ROTATING = 'carousel-start-rotating'
export const CAROUSEL_STOP_ROTATING = 'carousel-stop-rotating'

export function carouselLoadItems(items) {
  return { type: CAROUSEL_LOAD_ITEMS, payload: items }
} 

export function carouselUpdateItems(items) {
  return { type: CAROUSEL_UPDATE_ITEMS, payload: items }
}
export function carouselSlide(direction) {
  return { type: CAROUSEL_SLIDE, payload: direction }
}

export function carouselTransitionEnd() {
  return { type: CAROUSEL_TRANSITION_END }
}

export function carouselJumpTo(index) {
  return { type: CAROUSEL_JUMP_TO, payload: index }
}

export function carouselStartRotating() {
  return { type: CAROUSEL_START_ROTATING }
}

export function carouselStopRotating() {
  return { type: CAROUSEL_STOP_ROTATING }
}