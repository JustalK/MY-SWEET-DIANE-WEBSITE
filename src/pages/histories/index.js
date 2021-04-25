/**
* The home page
* @module pages/home
*/
`use strict`

import { getHistories } from '@src/services/history'

/**
* @function getStaticProps
* Get all the histories at build time
* @return {History[]} All the histories in the database
**/
/* istanbul ignore next */
export async function getStaticProps() {
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
      <h1>Page</h1>
      {histories.map((history, index) => (
        <p key={index}>{history.caption}</p>
      ))}
    </div>
  )
}

export default History
