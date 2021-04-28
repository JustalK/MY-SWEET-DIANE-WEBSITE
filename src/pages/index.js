import Head from 'next/head'
import { useEffect } from 'react'
import { createAnimation, render } from '@src/helper/animation'
import styles from '@src/styles/Home.module.scss'

import { getPageBySlug } from '@src/services/page'

/**
* @function getStaticProps
* Get the page at build time
* @return {Home[]} Get the page in the database
**/
/* istanbul ignore next */
export async function getStaticProps () {
  return getPageBySlug('home')
}

export default function Home ({ page }) {
  useEffect(() => {
    // createAnimation(document.body);
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Static App - justalk</title>
        <link rel="icon" href="/favicon.ico" />
				<script type="text/javascript" src="/static/libs/three/three.min.js"></script>
      </Head>
      <main id="HOME">
        <div>
          <div id="picture" />
          <h1 className={styles.title}>{page.title}</h1>
          <span>{page.summary}</span>
        </div>
      </main>
    </div>
  )
}
