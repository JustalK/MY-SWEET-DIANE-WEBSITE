/**
* The home page
* @module pages/home
*/
import CustomPage from '@src/components/Pages'
import CustomCard from '@src/components/Card'
import CustomEnd from '@src/components/End'
import { getMoments } from '@src/services/moment'
import { getPageBySlug } from '@src/services/page'
import styles from './styles.module.scss'

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
    }
  }
}

/**
* @function Home
* render the moment page
* @param {Moment[]} moment The list of Moment
* @return {Object} The html of the home
**/
const Moment = ({ page, moments }) => {
  return (
    <CustomPage title={page.slug}>
      <div className={styles.movable}>
        <span>{page.summary}</span>
        {moments.map((moment, index) => (
          <CustomCard key={index} order={index + 1} caption={moment.caption} image={moment.image} />
        ))}
         <CustomEnd />
      </div>
    </CustomPage>
  )
}

export default Moment
