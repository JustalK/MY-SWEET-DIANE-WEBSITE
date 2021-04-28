/**
* The home page
* @module pages/home
*/
import { getHistories } from '@src/services/history'

'use strict'

/**
* @function getStaticProps
* Get all the histories at build time
* @return {History[]} All the histories in the database
**/
/* istanbul ignore next */
export async function getStaticProps () {
  return getHistories()
}

/**
* @function Home
* render the home page
* @param {Post[]} posts The list of Post
* @return {Object} The html of the home
**/
const History = ({ histories }) => {
  return (
    <div>
      <h1>Histories</h1>
      {histories.map((history, index) => (
        <p key={index}>{history.caption}</p>
      ))}
    </div>
  )
}

export default History
