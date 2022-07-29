import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h1 className={styles.title}>Welcome</h1>
          <p className={styles.text}> lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className={styles.text}> lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link href="/ninjas">
              <a className={styles.btn}>See ninja listing</a>
          </Link>
      </div>

  )
}
