import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../../tailwind.config'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import NavbarMobile from './Mobile'
import NavbarDesktop from './Desktop'

export default function NavBar({ links = [], groups = [], className, ...props }) {

  const config = resolveConfig(tailwindConfig)
  const isMediumSize = useMediaQuery(`(min-width: ${config.theme.screens.md})`)

  return isMediumSize
    ? <NavbarDesktop
      links={links}
      groups={groups} 
      className={className} 
      {...props}
    />
    : <NavbarMobile 
      links={links}
      groups={groups}
      className={className}
      {...props}
    />
}
