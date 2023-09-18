import { HomeIcon, FolderIcon } from '@heroicons/react/24/solid'

import NavBar from './NavBar'
import LinkedInIcon from './icons/LinkedInIcon'
import GitHubIcon from './icons/GitHubIcon'

export default function Layout({ children, home, className, ...props }) {
  return (<>
    <div className="container min-h-screen mx-auto lg:px-8 lg:py-4 flex flex-col md:flex-row">
      <aside className="block basis-12 md:basis-32 md:flex-shrink-0">
        <NavBar
          className="fixed my-4 mx-4 md:mx-8 z-20"
          groups={[
            [
              { 
                title: 'Home',
                to: '/', 
                Icon: HomeIcon
              },
              {
                title: 'Projects',
                Icon: FolderIcon,
                to: '/projects/',
                items: [
                  {
                    to: '/projects/fairie',
                    title: 'F.A.I.R.I.E.'
                  },
                  {
                    to: '/projects/devindetails',
                    title: 'Dev In Details'
                  }
                ]
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
      <main className={'md:basis-auto flex-grow ' + className} {...props}>{children}</main>
    </div>
    <footer className="relative z-10 basis-full py-12 px-2">
      <p className="text-center my-4">Created by <strong>Sylvain Schellenberger</strong></p>
      <p className="text-center my-4">Design inspired by <a href="https://once-ui.com/">Once UI</a></p>
    </footer>
  </>)
}
