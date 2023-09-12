import { useState, useEffect, useRef } from 'react'

import { useDropdownState } from './StateContext'

export default function DropdownItems({ children, baseClassName = '', openClassName = '', closedClassName = '', renderContainer, delay = 50, ...props }) {
  const isOpen = useDropdownState()

  return typeof renderContainer === 'function' 
    ? (renderContainer({ isOpen, children, ...props }))
    : (<div
      className={baseClassName + ' ' + (isOpen 
        ? openClassName : closedClassName)}
      {...props}
    >
      {children}
    </div>)
}