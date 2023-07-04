export default function Card({ children, ...props }) {
  return (<article {...props} className="box-border rounded-3xl radial-gradient-white-20 p-2 shadow-[0_8px_16px_0_rgb(0,0,0,0.6)] border border-white-5">
    {children}
  </article>)
}

export function CardHeader({ title, cover }) {
 return (<header>
    <img src={`/images/${cover}`} alt={title} className="rounded-3xl" />
  </header>)
}

export function CardContent({ children }) {
  return (<div className="px-8 py-2 flex flex-row">
    {children}
  </div>)
}