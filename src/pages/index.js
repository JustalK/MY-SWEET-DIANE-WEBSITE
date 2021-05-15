import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CustomTransition from '@src/components/Transition'
import { ROUTE_MENU } from '@src/constants/routes'
import styles from './styles.module.scss'
import { getPageBySlug } from '@src/services/page'
import { getRandomNumber } from '@src/helper/random'
import { getCanonicalUrl } from '@src/helper/router'
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
  const [random, setRandom] = useState(0)
  const explodedTitle = page.title.split(' ')

  useEffect(() => {
    setRandom(getRandomNumber(0, page.images.length - 1))
  }, [])

  return (
    <div className={styles.page}>
      <Head>
        <title>My Sweetheart Diane</title>
        <meta name="description" content="My Sweet Diane | Home | The journal of my Sweet and loving wife, Diane." />
        <link rel="canonical" href={getCanonicalUrl()} />
      </Head>
      <CustomTransition />
      <Link href={ROUTE_MENU}>
        <main id={styles.main}>
          <div className={styles.mobile}>
            <div className={styles.picture}>
              <picture>
                <img src={page.images[random].url} alt="Flowers" />
              </picture>
            </div>
            <h1 className={styles.title}>{page.title}</h1>
            <span>{page.summary}</span>
          </div>
          <div className={styles.desktop}>
            <div>
              <h2 className={styles.title}>
                <div>
                  <span>{explodedTitle[0]}</span>
                  <span>{explodedTitle[1]}</span>
                </div>
                <div>
                  <span>DIANE</span>
                </div>
              </h2>
              <div className={styles.content}>
                <div>
                  <div>
                    <picture>
                      <Image
                        src={page.images[0].url}
                        alt="Flower"
                        width={70}
                        height={70}
                      />
                    </picture>
                  </div>
                  <div>
                    <picture>
                      <Image
                        src={page.images[1].url}
                        alt="Flower"
                        width={70}
                        height={70}
                      />
                    </picture>
                  </div>
                  <div>
                    <picture>
                      <Image
                        src={page.images[2].url}
                        alt="Flower"
                        width={70}
                        height={70}
                      />
                    </picture>
                  </div>
                </div>
                <span>{page.summary}</span>
              </div>
            </div>
          </div>
        </main>
      </Link>
    </div>
  )
}
