import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpiderWebs</title>
        <link rel="icon" href="/spider.svg" />
      </Head>

      <main className={styles.main}>
        SPIDERWEBS.DEV
      </main>

    </div>
  )
}
