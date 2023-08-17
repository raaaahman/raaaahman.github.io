export const CAROUSEL_LOAD_ITEMS = 'carousel-load-items'
export const CAROUSEL_SLIDE = 'carousel-slide'
export const CAROUSEL_SLIDE_DIRECTION_PREV = 'carousel-slide-prev'
export const CAROUSEL_SLIDE_DIRECTION_NEXT = 'carousel-slide-next'
export const CAROUSEL_TRANSITION_END = 'carousel-transition-end'
export const CAROUSEL_JUMP_TO = 'carousel-jump-to'

export function carouselLoadItems(items, autoRun = false) {
  return { type: CAROUSEL_LOAD_ITEMS, payload: { items, autoRun } }
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