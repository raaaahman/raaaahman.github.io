import { useDropdownDispatch } from './DispatchContext'
import { useDropdownState } from './StateContext'

export default function DropdownToggle({ children, renderOpen, renderClosed, render, ...props }) {
  const dispatch = useDropdownDispatch()
  const isOpen = useDropdownState()

  const handleClick = () => {
    if (isOpen) {
      dispatch.close()
    } else {
      dispatch.open()
    }
  }

  return (<button
    onClick={handleClick}
    {...props}
  >
    {typeof render === 'function'
      ? (render({ isOpen, children }))
      : children
    }
  </button>)
}