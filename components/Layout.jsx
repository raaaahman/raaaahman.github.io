import Link from 'next/link'

export default function Layout({ children, home, ...props }) {
  return (<div className="container min-h-screen mx-auto px-4">
    <main {...props}>{children}</main>
    {!home && (
      <div className="mt-12">
        <Link href="/">Back to Home</Link>
      </div>
    )}
  </div>)
}