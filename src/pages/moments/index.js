/**
* The home page
* @module pages/home
*/
import Head from 'next/head'
import CustomPage from '@src/components/Pages'
import CustomCard from '@src/components/Card'
import CustomEnd from '@src/components/End'
import { getMoments } from '@src/services/moment'
import { getPageBySlug } from '@src/services/page'
import styles from './styles.module.scss'
import { MAX_REVALIDATE_IN_SECOND } from '@src/constants/properties'

/**
* @function getStaticProps
* Get all the moment at build time
* @return {Moment[]} All the moment in the database
**/
/* istanbul ignore next */
/**
* @function getStaticProps
* Get all the histories at build time
* @return {History[]} All the histories in the database
**/
/* istanbul ignore next */
export async function getStaticProps () {
  const resultPage = getPageBySlug('moments')
  const resultMoments = getMoments()
  const result = await Promise.all([resultPage, resultMoments])
  return {
    props: {
      page: result[0].props.page,
      moments: result[1].props.moments
    },
    revalidate: MAX_REVALIDATE_IN_SECOND
  }
}

/**
* @function Home
* render the moment page
* @param {Moment[]} moment The list of Moment
* @return {Object} The html of the home
**/
const Moment = ({ page, moments }) => {
  const momentsPerGroup = Math.ceil(moments.length / 3)
  const momentsExploded = new Array(3).fill('').map((_, i) => moments.slice(i * momentsPerGroup, (i + 1) * momentsPerGroup))
  return (
    <CustomPage title={page.slug}>
      <Head>
        <title>My Sweetheart Diane</title>
        <meta name="description" content="My Sweetheart Diane" />
      </Head>
      <div className={`${styles.movable} ${styles.mobile}`}>
        <span>{page.summary}</span>
        {moments.map((moment, index) => {
          if (index > 0) {
            return (<CustomCard defer={true} key={index} order={index + 1} caption={moment.caption} image={moment.image} />)
          }

          return (<CustomCard key={index} order={index + 1} caption={moment.caption} image={moment.image} />)
        })}
         <CustomEnd />
      </div>
      <div className={`${styles.movable} ${styles.desktop}`}>
        <div className={styles.column}>
          <span>{page.summary}</span>
          {momentsExploded[0].map((moment, index) => {
            return (<CustomCard key={index} order={index + 1} caption={moment.caption} image={moment.image} />)
          })}
        </div>
        <div className={styles.column}>
          {momentsExploded[1].map((moment, index) => {
            return (<CustomCard key={index} order={index + 1 + momentsPerGroup} caption={moment.caption} image={moment.image} />)
          })}
        </div>
        <div className={styles.column}>
          {momentsExploded[2].map((moment, index) => {
            return (<CustomCard key={index} order={index + 1 + momentsPerGroup * 2} caption={moment.caption} image={moment.image} />)
          })}
        </div>
      </div>
    </CustomPage>
  )
}

export default Moment
