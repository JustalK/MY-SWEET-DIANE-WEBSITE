/**
* The module that will generate the Home page
* @module pages/home
*/
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CustomTransition from '@src/components/Transition'
import CustomHead from '@src/components/Head'
import { ROUTE_MENU } from '@src/constants/routes'
import styles from './styles.module.scss'
import { getPageBySlug } from '@src/services/page'
import { getRandomNumber } from '@src/helper/random'
import { getCurrentFullUrl } from '@src/helper/router'
import { MAX_REVALIDATE_IN_SECOND } from '@src/constants/properties'

/**
* @function getStaticProps
* Get the page at build time
* @return {Page} Get the home page
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

/**
* @function Home
* Create the component Home
* @param {Page} page The information of the Home page
* @return {Object} Return the dom of the Home page
**/
export default function Home ({ page }) {
  const [random, setRandom] = useState(0)
  const explodedTitle = page.title.split(' ')

  /**
  * Function that will be called when the componnt is mounted
  **/
  useEffect(() => {
    setRandom(getRandomNumber(0, page.images.length - 1))
  }, [])

  /**
  * Create the dom for the Home page
  * @return {Object} Return the dom for the Home Page
  **/
  return (
    <div className={styles.page}>
      <CustomHead
        url={getCurrentFullUrl()}
        title={page.title}
        description={page.description}
        image={page.images[0]}
      />
      <CustomTransition />
      <Link href={ROUTE_MENU}>
        <main id={styles.main}>
          <div className={styles.mobile}>
            <div className={styles.picture}>
              <picture>
                <Image
                  src={page.images[random].url}
                  alt={page.images[random].alt}
                  width={250}
                  height={250}
                />
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
                  <span>{explodedTitle[2]}</span>
                </div>
              </h2>
              <div className={styles.content}>
                <div>
                  {page.images.map((image, index) => (
                    <div key={index}>
                      <picture>
                        <Image
                          src={image.url}
                          alt={image.alt}
                          width={70}
                          height={70}
                        />
                      </picture>
                    </div>
                  ))}
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
