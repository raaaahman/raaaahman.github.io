import { createContext, useContext } from 'react'

const DropdownDispatchContext = createContext()

export function useDropdownDispatch() {
  const dispatch =  useContext(DropdownDispatchContext)

  if (!dispatch) {
    throw new Error('Dropdown sub-components should be nested within a DropdownContextProvider.')
  }

  return dispatch
}

export default DropdownDispatchContext