import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav><a href="/">Home</a> | <a href="/catalog">Catalog</a> </nav>
      <h1 className={styles.title}>
        Home:Hello World!
      </h1>
      <h2>Welcome to my store</h2>
    </main>

  )
}
