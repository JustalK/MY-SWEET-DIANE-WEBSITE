import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import CustomTransition from '@src/components/Transition'
import { ROUTE_MENU } from '@src/constants/routes'
import styles from './styles.module.scss'
import { getPageBySlug } from '@src/services/page'
import { MAX_REVALIDATE_IN_SECOND } from '@src/constants/properties'

/**
* @function getStaticProps
* Get the page at build time
* @return {Home[]} Get the page in the database
**/
/* istanbul ignore next */
export async function getStaticProps () {
  const resultPage = await getPageBySlug('home')
  return {
    props: {
      page: resultPage.props.page
    },
    revalidate: MAX_REVALIDATE_IN_SECOND
  }
}

export default function Home ({ page }) {
  useEffect(() => {
    // createAnimation(document.body);
  }, [])

  return (
    <div className={styles.page}>
      <Head>
        <title>My Sweetheart Diane</title>
        <meta name="description" content="My Sweetheart Diane" />
        <meta name="author" content="Justal Kevin" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CustomTransition />
      <Link href={ROUTE_MENU}>
        <main id={styles.main}>
          <div>
            <div className={styles.picture} />
            <h1 className={styles.title}>{page.title}</h1>
            <span>{page.summary}</span>
          </div>
        </main>
      </Link>
    </div>
  )
}
