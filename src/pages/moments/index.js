/**
* The moment page
* @module pages/moment
*/
import CustomPage from '@src/components/Pages'
import CustomCard from '@src/components/Card'
import CustomEnd from '@src/components/End'
import CustomHead from '@src/components/Head'
import { getMoments } from '@src/services/moment'
import { getPageBySlug } from '@src/services/page'
import { getCurrentFullUrl } from '@src/helper/router'
import styles from './styles.module.scss'
import { MAX_REVALIDATE_IN_SECOND } from '@src/constants/properties'

/**
* @function getStaticProps
* Get the Moment page at build time
* @return {Page} Get the moment page
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
* @function Moment
* render the Moment page
* @param {Page} page The information of the Moment page
* @param {Moment[]} moments The list of Moment
* @return {Object} The dom of the Moment page
**/
const Moment = ({ page, moments }) => {
  const momentsPerGroup = Math.ceil(moments.length / 3)
  const momentsExploded = new Array(3).fill('').map((_, i) => moments.slice(i * momentsPerGroup, (i + 1) * momentsPerGroup))

  /**
  * Create the dom for the Moment page
  * @return {Object} Return the dom for the Moment Page
  **/
  return (
    <CustomPage title={page.slug}>
      <CustomHead
        url={getCurrentFullUrl()}
        title={page.title}
        description={page.description}
        image={page.images[0]}
      />
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
