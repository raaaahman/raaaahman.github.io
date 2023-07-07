export default function Card({ children, className, ...props }) {
  className += ' box-border rounded-3xl radial-gradient-white-20 p-2 shadow-[0_8px_16px_0_rgb(0,0,0,0.6)] border border-white-5'
  
  return (<article {...props} className={className}>
    {children}
  </article>)
}

export function CardHeader({ title, cover }) {
 return (<header
  style={{ '--image-url': `url('images/${cover}')` }}
  title={title}
  className="w-full h-48 lg:h-64 rounded-3xl bg-[image:var(--image-url)] bg-cover bg-center"
 >
  </header>)
}

export function CardContent({ children }) {
  return (<div className="px-8 py-2 flex flex-row">
    {children}
  </div>)
}