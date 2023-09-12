import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import DropdownContextProvider from '../Dropdown/Provider'
import DropdownToggle from '../Dropdown/Toggle'
import DropdownItems from '../Dropdown/Items'

export default function NavbarDesktop({ links, groups, className, ...props}) {
  const { pathname } = useRouter()

  return (<ul 
    className={className + " list-style-none w-max bg-grey-darker bg-gradient-to-b from-white-5 rounded-full border border-white-10 p-1 shadow-element"}
    {...props}
  >
    {links.length > 0
      ? <LinksGroup links={links} activeLink={pathname} />
      : null
    }
    {groups.length > 0
      ? groups.map((links, index) => (<Fragment key={'group-' + index}>
        {index > 0 ? <hr className="border-top border-grey-400 w-8 my-2 mx-auto"/> : null}
        <LinksGroup links={links} activeLink={pathname} />
      </Fragment>))
      : null
    }
  </ul>)
}

function LinksGroup({ links, activeLink }) {
  return links.map(({ to, Icon, title, items, external = false }) => {
    const isActiveElement = activeLink === to || items?.find(item => activeLink === item.to)

    const linkClassName = 'flex flex-col justify-center items-center relative Z-10 ' + (isActiveElement
      ? "bg-white-10 rounded-full w-12 h-12 after:content-['●'] after:block after:text-[0.3rem] after:leading-3 after:text-white-strong after:text-center"
      : 'w-12 h-10'
    )

    return (<li key={title} className="relative hover:before:content-[' '] hover:before:absolute hover:before:top-0 hover:before:bottom-0 hover:before:left-0 hover:before:right-0 hover:before:rounded-full hover:before:bg-white-10 hover:before:blur">
      {items instanceof Array && items.length > 0
        ? (<DropdownContextProvider
          className={'relative'}
        >
          <DropdownToggle
            className={linkClassName}
          >
            <Icon
              title={title}
              className={isActiveElement
                ? "bock w-6 h-6 text-white-strong"
                : "block w-4 h-4 text-grey-400"} 
            />
          </DropdownToggle>
          <DropdownItems
           renderContainer={({ isOpen, children }) => (<div
              className="absolute right-0 top-0 translate-x-full -m-1 border border-transparent"
           >
              <ul
                className={'overflow-hidden motion-safe:transition-[width] md:bg-gradient-to-b md:from-white-5 bg-grey-dark md:bg-grey-darker rounded-r-md py-2 ' + (isOpen
                  ? 'w-full border-t border-r border-b border-white-10'
                  : 'w-[0%]'
                )}
              >
                {children}
              </ul>
           </div>)}
          >
            {items.map(
              ({ to, title }) => (<li
                key={to}
                className="hover:bg-white-20 py-1 px-4 not(last):border-b border-white-10"
              >
                <Link 
                  href={to}
                  target={to.startsWith('/') ? '_self' : '_blank' }
                  className="block whitespace-nowrap w-fit text-white-medium"
                >
                  {title}
                </Link>
              </li>)
            )}
          </DropdownItems>
        </DropdownContextProvider>)
        : (<Link 
          href={to} 
          className={linkClassName}
          target={external ? '_blank' : '_self' }
        >
          <Icon
            title={title}
            className={isActiveElement
              ? "block w-6 h-6 text-white-strong"
              : "block w-4 h-4 text-grey-400"} 
          />
        </Link>)
      } 
    </li>)
  })
}

