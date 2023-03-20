import Head from 'next/head'
import * as styles from './HomePage.styles'
import Task1 from './Task1'
import Task2 from './Task2'

export default function HomePage() {
  return (
    <div className={styles.root}>
      <Head>
        <title>loading-wrapper-use-form</title>
        <meta name="description" content="loading-wrapper-use-form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>loading-wrapper-use-form</h1>
        <div className={styles.content}>
          <Task1 />
          <Task2 />
        </div>
      </main>
    </div>
  )
}
