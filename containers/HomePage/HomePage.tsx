import Head from 'next/head'
import * as styles from './HomePage.styles'
import Task1 from './Task1'
import Task2 from './Task2'

export default function HomePage() {
  return (
    <div className={styles.root}>
      <Head>
        <title>ts-next-storybook-template</title>
        <meta name="description" content="ts-next-storybook-template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ts-next-storybook-template</h1>
        <div className={styles.content}>
          <Task1 />
          <Task2 />
        </div>
      </main>
    </div>
  )
}
