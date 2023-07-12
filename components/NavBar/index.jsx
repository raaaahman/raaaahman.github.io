import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

export default function NavBar({ links, groups }) {
  return (<ul className="list-style-none w-max bg-gradient-to-b from-white-5 bg-black-10 rounded-full border border-white-10 p-1 shadow-element">
    {links
      ? <LinksGroup links={links} />
      : null
    }
    {groups
      ? groups.map((links, index) => (<Fragment key={'group-' + index}>
        {index > 0 ? <hr className="border-top border-grey-400 w-8 my-2 mx-auto"/> : null}
        <LinksGroup links={links} />
      </Fragment>))
      : null
    }
  </ul>)
}

function LinksGroup({ links }) {
  const { asPath } = useRouter()

  return links.map(({ to, Icon, title, external = false }) => {
    const isActiveElement = to === asPath

    return (<li key={title} className="relative hover:before:content-[' '] hover:before:absolute hover:before:top-0 hover:before:bottom-0 hover:before:left-0 hover:before:right-0 hover:before:rounded-full hover:before:bg-white-10 hover:before:blur">
      <Link 
        href={to} 
        className={'flex flex-col justify-center items-center relative Z-10 ' + (isActiveElement
          ? "bg-white-10 rounded-full w-12 h-12 after:content-['●'] after:block after:text-[0.3rem] after:leading-3 after:text-white-strong after:text-center"
          : 'w-12 h-10'
        )}
        target={external ? '_blank' : '_self' }
      >
        <Icon
          title={title}
          className={isActiveElement
            ? "block w-6 h-6 text-white-strong"
            : "block w-4 h-4 text-grey-400"} 
        />
      </Link>
    </li>)
  })
}
