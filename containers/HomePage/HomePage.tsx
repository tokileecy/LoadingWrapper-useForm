import Head from 'next/head'
import * as styles from './HomePage.styles'
import Task1 from './Task1'

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
        </div>
      </main>
    </div>
  )
}
