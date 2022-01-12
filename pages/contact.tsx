import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Patrick Brennan</title>
        <meta name="description" content="Patrick Brennan's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact Me!
        </h1>
      </main>
    </div>
  )
}

export default Contact