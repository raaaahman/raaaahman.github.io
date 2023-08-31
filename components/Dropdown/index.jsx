'use client'
import { useState } from 'react'
import useClickAway from './useClickAway'

export default function DropDown({ className, children, items, ...props }) {
  const [ isOpen, setIsOpen ] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  const ref = useClickAway(() => {
    setIsOpen(false)
  })
  
  return <button 
    onClick={handleClick}
    ref={ref}
    className={'relative group ' + className} 
    {...props}
  >
    {children}
    <div
      className="absolute right-0 w-fit translate-x-full -z-10 -m-1 border border-transparent "
    >
      <ul
        style={{ '--tw-bg-opacity': '85%' }}
        className={'overflow-hidden motion-safe:transition-[width] bg-gradient-to-b from-white-5 bg-grey-dark rounded-r-md py-2 ' + (isOpen
          ? 'w-full border-t border-r border-b border-white-10'
          : 'w-[0%]'
        )}
      >
        {items.map((item, index) => (<li 
          key={index}
          className="hover:bg-white-20 py-1 px-4 not(last):border-b border-white-10"
        >
          {item}
        </li>))}
      </ul>
    </div>
    
  </button>
}
