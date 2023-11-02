import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav><a href="/">Home</a> | <a href="/catalog">Catalog</a> </nav>
      <h1 className={styles.title}>
        Catalog:Hello World!
      </h1>
      <h2>List of Products</h2>
    </main>
  )
}
