import styles from './layout.module.css'
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (<div className={styles.container}>
    <main>{children}</main>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">Back to Home</Link>
      </div>
    )}
  </div>)
}