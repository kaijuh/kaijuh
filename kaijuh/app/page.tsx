import Posts from './components/posts/Posts'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello</h1>
      <Posts />
    </main>
  )
}
