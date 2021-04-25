/**
* The home page
* @module pages/home
*/
`use strict`

import { getMoments } from '@src/services/moment'

/**
* @function getStaticProps
* Get all the moment at build time
* @return {Moment[]} All the moment in the database
**/
/* istanbul ignore next */
export async function getStaticProps() {
  return getMoments()
}

/**
* @function Home
* render the moment page
* @param {Moment[]} moment The list of Moment
* @return {Object} The html of the home
**/
const Moment = ({ moments }) => {
  return (
    <div>
      <h1>Moments</h1>
      {moments.map((moments, index) => (
        <p key={index}>{moments.caption}</p>
      ))}
    </div>
  )
}

export default Moment
