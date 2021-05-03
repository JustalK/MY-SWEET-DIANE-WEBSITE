/**
* The home page
* @module pages/home
*/
import { getHistories } from '@src/services/history'
import { useRouter } from 'next/router'

export async function getStaticPaths () {
  return {
    paths: [], // indicates that no page needs be created at build time
    fallback: 'blocking' // indicates the type of fallback
  }
}

/**
* @function getStaticProps
* Get all the histories at build time
* @return {History[]} All the histories in the database
**/
/* istanbul ignore next */
export async function getStaticProps () {
  return getHistories({})
}

/**
* @function Home
* render the home page
* @param {Post[]} posts The list of Post
* @return {Object} The html of the home
**/
const HistoryYear = ({ histories }) => {
  const router = useRouter()
  const { year } = router.query

  return (
    <div>
      <h1>Histories {year}</h1>
      {histories.map((history, index) => (
        <p key={index}>{history.caption}</p>
      ))}
    </div>
  )
}

export default HistoryYear
