/**
* The home page
* @module pages/home
*/
import { createRef, useEffect, useCallback } from 'react'
import { getHistories } from '@src/services/history'
import { getPageBySlug } from '@src/services/page'
import CustomPage from '@src/components/Pages'
import CustomBadge from '@src/components/Badge'
import styles from './styles.module.scss'

/**
* @function getStaticProps
* Get all the histories at build time
* @return {History[]} All the histories in the database
**/
/* istanbul ignore next */
export async function getStaticProps () {
  const resultPage = getPageBySlug('histories')
  const resultHistories = getHistories({})
  const result = await Promise.all([resultPage, resultHistories])
  return {
    props: {
      page: result[0].props.page,
      histories: result[1].props.histories
    }
  }
}

/**
* @function Home
* render the home page
* @param {Post[]} History The list of Post
* @return {Object} The html of the home
**/
const History = ({ histories, page }) => {
  const ref = createRef()

  const handleScroll = useCallback(() => {
    console.log('AAA')
  }, [])

  useEffect(() => {
    ref.current.addEventListener('scroll', handleScroll)
    return () => {
      if (ref && ref.current) {
        ref.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [ref])

  return (
    <CustomPage title={page.slug} ref={ref}>
      <div className={styles.movable}>
        <span>Histories lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
        {histories.map((history, index) => (
          <CustomBadge key={history.id} caption={history.caption} date={history.date} image={history.image} />
        ))}
      </div>
    </CustomPage>
  )
}

export default History
