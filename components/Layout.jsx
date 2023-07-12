import { HomeIcon, FolderIcon } from '@heroicons/react/24/solid'

import NavBar from './NavBar'
import LinkedInIcon from './icons/LinkedInIcon'
import GitHubIcon from './icons/GitHubIcon'

export default function Layout({ children, home, className, ...props }) {
  return (<div className="container min-h-screen mx-auto lg:px-8 lg:py-4 flex">
    <aside className="hidden md:block md:basis-32 md:flex-shrink-0">
      <NavBar
        className="fixed my-4 mx-8"
        groups={[
          [
            { 
              title: 'Home',
              to: '/#intro', 
              Icon: HomeIcon
            },
            {
              title: 'Projects',
              to: '/#projects',
              Icon: FolderIcon
            }
          ],
          [
            {
              title: 'LinkedIn',
              to: 'https://www.linkedin.com/in/sylvain-schellenberger/',
              Icon: LinkedInIcon,
              external: true
            },
            {
              title: 'GitHub',
              to: 'https://github.com/raaaahman',
              Icon: GitHubIcon,
              external: true
            }
          ]
        ]}
      />
    </aside>
    <main className={'flex-grow ' + className} {...props}>{children}</main>
  </div>)
}
