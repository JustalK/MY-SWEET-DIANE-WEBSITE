/**
* The home page
* @module pages/home
*/
import { createRef, useEffect, useRef, useState, useCallback, useReducer } from 'react'
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
  const movable = useRef()
  const [historiesLoadMore, setHistoriesLoadMore] = useState([])
  const loadMore = useCallback(async () => {
    console.log('LOADMORE')
    //const result = await getHistories({})
    //setHistoriesLoadMore(result)
    setTimeout(() => {
      handleScroll({ type: 'reset' })
    }, 3000)
  }, [])
  // Use Reducer is better in this case because the next iteration depend of the previous one
  const [isLoading, handleScroll] = useReducer((state, event) => {
    if (!state && event.type === 'scroll') {
      // Get the size of the movable element + the offset of the top
      const bottomOfPage = movable.current.clientHeight + movable.current.offsetTop
      // Get the position from the top inside the element and adding the size of the screen (careful everything is negative here)
      const bottomOfCurrentScreen = Math.abs(movable.current.getBoundingClientRect().top - window.innerHeight)
      const offset = 200
      if (bottomOfPage - offset < bottomOfCurrentScreen) {
        loadMore()
        console.log('END OF PAGE')
        return true
      }
    }

    if (event.type === 'reset') {
      console.log('RESET')
      return false
    }

    return state
  }, false)

  useEffect(() => {
    ref.current.addEventListener('scroll', handleScroll)
    return () => {
      if (ref && ref.current) {
        ref.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [handleScroll])

  return (
    <CustomPage title={page.slug} ref={ref}>
      <div ref={movable} className={styles.movable}>
        <span>Histories lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
        {histories.map((history, index) => (
          <CustomBadge key={history.id} caption={history.caption} date={history.date} image={history.image} />
        ))}
        {historiesLoadMore.map((history, index) => (
          <CustomBadge key={history.id} caption={history.caption} date={history.date} image={history.image} />
        ))}
      </div>
    </CustomPage>
  )
}

export default History
