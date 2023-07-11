import Link from 'next/link'

export default function NavBar({ links }) {
  return (<ul className="list-style-none w-max bg-gradient-to-b from-white-20 to-white-5 rounded-full border border-white-10 p-1">
    {links.map(({ to, Icon, title }, index) => {
      const isActiveElement = index === 0

      return (<li key={title} className="relative hover:before:content-[' '] hover:before:absolute hover:before:top-0 hover:before:bottom-0 hover:before:left-0 hover:before:right-0 hover:before:rounded-full hover:before:bg-white-10 hover:before:blur">
        <Link href={to} className={isActiveElement 
          ? "flex flex-col justify-center items-center bg-white-10 rounded-full w-12 h-12 after:content-['\u25cf'] after:block after:text-[0.3rem] after:leading-3 after:text-white-strong after:text-center"
          : 'flex flex-col justify-center items-center w-12 h-10'
        }>
          <Icon
            title={title}
            className={isActiveElement
              ? "block w-6 h-6 text-white-strong"
              : "block w-4 h-4 text-white-weak"
            }
          />
        </Link>
      </li>)
    })}
  </ul>)
}