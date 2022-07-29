import styles from '../styles/Home.module.css'
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
      <>
          <Head>
              <title>Ninja list | Home</title>
              <meta name="keywords" content="Index" />
          </Head>
          <div>
              <h1 className={styles.title}>Welcome</h1>
              <p className={styles.text}> lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className={styles.text}> lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link href="/ninjas/index">
                  <a className={styles.btn}>See ninja listing</a>
              </Link>
          </div>

      </>

  )
}
