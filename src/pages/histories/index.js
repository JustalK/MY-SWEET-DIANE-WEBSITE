/**
* The home page
* @module pages/home
*/
import Head from 'next/head'
import { useEffect, useRef, useState, useCallback, useReducer } from 'react'
import { getHistories } from '@src/services/history'
import { getPageBySlug } from '@src/services/page'
import CustomPage from '@src/components/Pages'
import CustomBadge from '@src/components/Badge'
import CustomBadgeLoading from '@src/components/Badge/Loading'
import CustomEnd from '@src/components/End'
import CustomSlider from '@src/components/Slider'
import CustomSlide from '@src/components/Slider/slides/Secondary'
import CustomMeta from '@src/components/Meta'
import styles from './styles.module.scss'
import { getRange } from '@src/helper/utils'
import { isDesktop } from '@src/helper/windows'
import { getCanonicalUrl, getCurrentFullUrl } from '@src/helper/router'
import { MAX_HISTORIES_IN_ONE_CALL } from '@src/constants/histories'
import { MINIMUM_YEAR } from '@src/constants/filters'
import { MAX_REVALIDATE_IN_SECOND } from '@src/constants/properties'

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
    },
    revalidate: MAX_REVALIDATE_IN_SECOND
  }
}

/**
* @function History
* render the History page
* @param {Page} page The information of the History page
* @param {History[]} histories The list of History
* @return {Object} The dom of the History page
**/
const History = ({ page, histories }) => {
  let loadMoreTimer = null
  let changeFilterTimer = null
  const date = new Date()
  const year = date.getFullYear()
  const filters = getRange(MINIMUM_YEAR, year, 1)
  const ref = useRef()
  const movable = useRef()
  const [filterDate, setFilterDate] = useState({ year: filters[0] })
  const [historiesLoadMore, setHistoriesLoadMore] = useState([...histories])
  const [skipHistories, setSkipHistories] = useState(MAX_HISTORIES_IN_ONE_CALL)
  const [isEndOfPage, setIsEndOfPage] = useState(false)

  /**
  * Load more histories
  * It will add 5 more story to the actual list following the year filter chose
  * I use a setTimeout to make sure I am not calling it twice
  *
  **/
  const loadMore = useCallback(async () => {
    clearTimeout(loadMoreTimer)
    loadMoreTimer = setTimeout(async () => {
      const result = await getHistories({ skip: skipHistories, ...filterDate })
      const moreHistory = result.props.histories
      if (moreHistory.length < MAX_HISTORIES_IN_ONE_CALL) {
        setIsEndOfPage(true)
      }
      setHistoriesLoadMore([...historiesLoadMore, ...moreHistory])
      setSkipHistories(skipHistories + MAX_HISTORIES_IN_ONE_CALL)
      handleScroll({ type: 'reset' })
    }, 100)
  }, [historiesLoadMore, loadMoreTimer, skipHistories, filterDate])

  /**
  * It will decide if we need to load more or not depending if we reached the bottom of the page
  * Use Reducer is better in this case because the next iteration depend of the previous one
  * @param {boolean} state The current value of isLoading (not depending of the value of the react vue)
  * @param {string} event The name of the event triggering the change of state
  * @param {boolean} Return true if more histories are being loaded
  **/
  const [isLoading, handleScroll] = useReducer((state, event) => {
    if (!state && event.type === 'scroll' && ref && ref.current.getContent()) {
      const content = isDesktop() ? movable.current : ref.current.getContent()
      // Get the size of the movable element + the offset of the top
      const bottomOfPage = content.clientHeight + content.offsetTop
      // Get the position from the top inside the element and adding the size of the screen (careful everything is negative here)
      const bottomOfCurrentScreen = Math.abs(content.getBoundingClientRect().top - window.innerHeight)
      const offset = isDesktop() ? 400 : 200
      if (bottomOfPage - offset < bottomOfCurrentScreen) {
        loadMore()
        return true
      }
    }

    if (event.type === 'reset') {
      return false
    }

    return state
  }, false)

  /**
  * Handle the reference of the scroll when the user resize the website
  * Since the desktop version and mobile version does not use the same reference
  **/
  const handleResize = () => {
    cleanScrollEvent()
    if (isDesktop()) {
      ref.current.getScrollDesktop().addEventListener('scroll', handleScroll)
    } else {
      ref.current.getScroll().addEventListener('scroll', handleScroll)
    }
  }

  /**
  * Function that will be called when the componnt is mounted
  **/
  useEffect(() => {
    // IF it's a desktop we fix the even on another ref
    if (isDesktop()) {
      ref.current.getScrollDesktop().addEventListener('scroll', handleScroll)
    } else {
      ref.current.getScroll().addEventListener('scroll', handleScroll)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      cleanScrollEvent()
    }
  }, [handleScroll])

  /**
  * Clean the scroll event on the reference
  **/
  const cleanScrollEvent = () => {
    ref?.current?.getScroll()?.removeEventListener('scroll', handleScroll)
    ref?.current?.getScrollDesktop()?.removeEventListener('scroll', handleScroll)
  }

  /**
  * Handle the change made on the slider
  * It changes the filter of year for the history
  * @param {number} index The index of the slide of the slider
  **/
  const onChange = useCallback(index => {
    clearTimeout(changeFilterTimer)
    changeFilterTimer = setTimeout(async () => {
      const filterYear = { year: filters[index] }
      const result = await getHistories({ skip: 0, ...filterYear })
      setHistoriesLoadMore(result.props.histories)
      setIsEndOfPage(false)
      setSkipHistories(MAX_HISTORIES_IN_ONE_CALL)
      setFilterDate(filterYear)
    }, 500)
  }, [filters, changeFilterTimer])

  return (
    <CustomPage title={page.slug} ref={ref}>
      <Head>
        <title>My Sweetheart Diane</title>
        <meta name="description" content="My Sweetheart Diane" />
        <link rel="canonical" href={getCanonicalUrl()} />
        <CustomMeta url={getCurrentFullUrl()} title={page.slug} description={page.summary} image={page.images[0]} />
      </Head>
      <div className={`${styles.movable} ${styles.mobile}`}>
        <span>{page.summary}</span>
        <CustomSlider onChange={onChange} autoplay={false} className={styles.slider}>
          {filters.map((filter, index) => (
            <CustomSlide key={index} text={filter} />
          ))}
        </CustomSlider>
        {historiesLoadMore.map((history, index) => (
          <CustomBadge key={index} caption={history.caption} date={history.date} image={history.image} />
        ))}
        {!isEndOfPage && <CustomBadgeLoading />}
        {isEndOfPage && <CustomEnd />}
      </div>
      <div ref={movable} className={`${styles.movable} ${styles.desktop}`}>
        <div>
          <span>{page.summary}</span>
          {historiesLoadMore.map((history, index) => (
            <CustomBadge key={index} caption={history.caption} date={history.date} image={history.image} />
          ))}
          {!isEndOfPage && <CustomBadgeLoading />}
          {isEndOfPage && <CustomEnd />}
        </div>
      </div>
    </CustomPage>
  )
}

export default History
