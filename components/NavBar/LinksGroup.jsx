import Link from 'next/link'

import DropDown from '../Dropdown'

export default function LinksGroup({ links, activeLink }) {
  return links.map(({ to, Icon, title, items, external = false }) => {
    const isActiveElement = activeLink === to || items?.find(item => activeLink === item.to)

    const className = 'flex flex-col justify-center items-center relative Z-10 ' + (isActiveElement
      ? "bg-white-10 rounded-full w-12 h-12 after:content-['●'] after:block after:text-[0.3rem] after:leading-3 after:text-white-strong after:text-center"
      : 'w-12 h-10'
    )

    return (<li key={title} className="relative hover:before:content-[' '] hover:before:absolute hover:before:top-0 hover:before:bottom-0 hover:before:left-0 hover:before:right-0 hover:before:rounded-full hover:before:bg-white-10 hover:before:blur">
      {items instanceof Array && items.length > 0
        ? (<DropDown
            className={className}
            items={items.map(
              ({ to, title }) => (<Link 
                key={to}
                href={to}
                target={to.startsWith('/') ? '_self' : '_blank' }
                className="block whitespace-nowrap w-fit"
              >
                {title}
              </Link>)
            )}
          >
            <Icon
              title={title}
              className={isActiveElement
                ? "bock w-6 h-6 text-white-strong"
                : "block w-4 h-4 text-grey-400"} 
            />
          </DropDown>)
        : (<Link 
          href={to} 
          className={className}
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