'use client'
import { useMemo, useState } from 'react'

import DropdownDispatchContext from './DispatchContext'
import DropdownStateContext from './StateContext'
import useClickAway from '../../hooks/useClickAway'

export default function DropdownContextProvider({ children, renderContainer, ...props }) {
  const [ isOpen, setIsOpen ] = useState(false)

  const dispatch = useMemo(() => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }), [])

  const ref = useClickAway(() => {
    setIsOpen(false)
  }, [])

  return (<DropdownDispatchContext.Provider value={dispatch}>
    <DropdownStateContext.Provider value={isOpen}>
      {typeof renderContainer === 'function'
        ? renderContainer({ isOpen, children, ref, ...props })
        : (<div
          ref={ref}
          {...props}
        >
          {children}
        </div>)
      } 
    </DropdownStateContext.Provider>
  </DropdownDispatchContext.Provider>)
}