import { createContext, useContext } from 'react'

const DropdownStateContext = createContext()

export function useDropdownState() {
  const state = useContext(DropdownStateContext)

  if (typeof state === 'undefined') {
    throw new Error('Dropdown sub-components should be nested within a DropdownContextProvider.')
  }

  return state
}

export default DropdownStateContext