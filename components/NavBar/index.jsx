import { useRouter } from 'next/router'
import { Fragment } from 'react'

import LinksGroup from './LinksGroup'

export default function NavBar({ links, groups, className, ...props }) {
  const { pathname } = useRouter()

  return (<ul 
    className={className + " list-style-none w-max bg-gradient-to-b from-white-5 bg-black-10 rounded-full border border-white-10 p-1 shadow-element"}
    {...props}  
  >
    {links
      ? <LinksGroup links={links} activeLink={pathname} />
      : null
    }
    {groups
      ? groups.map((links, index) => (<Fragment key={'group-' + index}>
        {index > 0 ? <hr className="border-top border-grey-400 w-8 my-2 mx-auto"/> : null}
        <LinksGroup links={links} activeLink={pathname} />
      </Fragment>))
      : null
    }
  </ul>)
}

