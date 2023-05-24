import Link from 'next/link'

export default function Layout({ children, home }) {
  return (<div className="container mx-auto mt-12 mb-24 px-4">
    <main>{children}</main>
    {!home && (
      <div className="mt-12">
        <Link href="/">Back to Home</Link>
      </div>
    )}
  </div>)
}