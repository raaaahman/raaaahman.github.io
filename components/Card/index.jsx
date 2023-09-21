import Image from "next/image"

export default function Card({ children, className, ...props }) {
  className += ' box-border rounded-3xl radial-gradient-white-20 p-2 shadow-[0_8px_16px_0_rgb(0,0,0,0.6)] border border-white-5'
  
  return (<article {...props} className={className}>
    {children}
  </article>)
}

export function CardHeader({ title, cover, ...props }) {
 return (<header className="relative min-h-[18rem]">
    <Image
      alt={title}
      src={cover}
      fill
      className="object-cover object-center rounded-3xl"
      {...props}
    />
  </header>)
}

export function CardContent({ children }) {
  return (<div className="p-2 flex flex-row">
    {children}
  </div>)
}