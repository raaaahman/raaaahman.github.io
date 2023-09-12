import Link from 'next/link'

import DropdownContextProvider from '../Dropdown/Provider'
import DropdownToggle from '../Dropdown/Toggle'
import DropdownItems from '../Dropdown/Items'
import { ResizeContainer } from '../Resize/ResizeContainer'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export default function NavbarMobile({ links, groups, className, ...props }) {
  return ((<DropdownContextProvider>
    <DropdownToggle
      render={({ isOpen }) => isOpen
        ? (<XMarkIcon title="Close Menu" aria-hidden={false} className="box-border w-14 h-14 p-3" />)
        : (<Bars3Icon title="Open Menu" aria-hidden={false} className="box-border w-14 h-14 p-3" />)
      }
      className={className + " bg-grey-dark rounded-full border border-white-10 shadow-element"}
    />
    <DropdownItems
      renderContainer={({ isOpen, children }) => (
        <ul
          className={'fixed z-20 top-24 left-4 list-none overflow-hidden motion-safe:transition-[width] bg-grey-dark rounded-md py-2 max-w-fit shadow-element ' + (isOpen
            ? 'w-full border border-white-10'
            : 'w-[0%]'
          )}
          {...props}
        >
          {children}
        </ul>
      )}
    >
      {links.concat(groups.flat()).map((item, index, items) => (<li
        className="block"
        key={item.to}
      >
        {index > 0 && item.external === true && !items[index - 1].external
          ? <hr className="basis-full shrink-0 border-t border-white-weak my-2 mx-4" />
          : null}
        {item.items instanceof Array
          ? (<DropdownContextProvider
            className="px-4"
          >
            <DropdownToggle
              className="flex items-center leading-10"
            >
              <item.Icon role="presentation" className="block shrink-0 w-6 h-6 me-2 text-white-weak" />
              <span className="text-white-medium">{item.title}</span>
            </DropdownToggle>
            <DropdownItems
              renderContainer={({ isOpen, children }) => (<ResizeContainer
                renderContainer={({ ref, containerHeight }) => (<ul
                    ref={ref}
                    style={{ '--my-container-height': containerHeight + 'px' }}
                    className={'overflow-hidden motion-safe:transition-[height] ' + (isOpen ? 'h-[var(--my-container-height)]' : 'h-0')}
                  >
                    {children}
                  </ul>)}
                />)}
            >
              {item.items.map(
                item => (<li 
                  key={item.to}
                  className="ms-4"
                >
                  <Link
                    href={item.to}
                    className="text-white-medium whitespace-nowrap leading-8"
                  >
                    {item.title}
                  </Link>
                </li>)
              )}
            </DropdownItems>
          </DropdownContextProvider>)
          : (<Link
            href={item.to}
            className="flex items-center leading-10 px-4"
          >
            <item.Icon role="presentation" className="block shrink-0 w-6 h-6 me-2 text-white-weak" />
            <span className="text-white-medium">{item.title}</span>
          </Link>)}
      </li>))}
    </DropdownItems>
  </DropdownContextProvider>))
}