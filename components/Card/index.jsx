import Image from "next/image"

export default function Card({ children, className, ...props }) {
  className += ' box-border rounded-3xl radial-gradient-white-20 p-2 shadow-[0_8px_16px_0_rgb(0,0,0,0.6)] border border-white-5'
  
  return (<article {...props} className={className}>
    {children}
  </article>)
}

export function CardHeader({ title, cover }) {
 return (<header className="relative h-[16rem] lg:h-[24rem]">
    <Image
      alt={title}
      src={'/images/' + cover}
      fill
      className="object-cover object-center rounded-3xl"
    />
  </header>)
}

export function CardContent({ children }) {
  return (<div className="px-8 py-2 flex flex-row">
    {children}
  </div>)
}