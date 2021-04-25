import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { getPageBySlug } from '@src/services/page'

/**
* @function getStaticProps
* Get the page at build time
* @return {Home[]} Get the page in the database
**/
/* istanbul ignore next */
export async function getStaticProps() {
  return getPageBySlug('home')
}

export default function Home({page}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Static App - justalk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Static App - justalk</h1>
      </main>

      <footer className={styles.footer}>
        {page.summary}
      </footer>
    </div>
  )
}
