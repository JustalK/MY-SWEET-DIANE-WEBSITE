/**
* The module for managing the request for the history
* @module services/history
*/

/**
 * The History object
 * It regroups every event of our life
 * @typedef {Object} History
 * @property {string} _id The id of the history
 * @property {date} date The date of the history
 * @property {string} caption The caption of the history
 * @property {Asset} image The image of the history
 *
 * The Image object
 * It regroups every image of the app
 * @typedef {Object} Asset
 * @property {string} _id The id of the image
 * @property {string} url The url of the image
 */

import graphCmsClient from '@src/services/libs/graphCmsClient'
import { MAX_HISTORIES_IN_ONE_CALL } from '@src/constants/histories'
import { MINIMUM_YEAR } from '@src/constants/filters'

/**
* @function getHistories
* Get all the history from graphcms
* @param {number} [first=5] The number of history get in one call
* @param {number} [skip=0] The number of history skip in the call
* @param {number} [year=null] The filter for getting only the history of minimum this year
* @return {History[]} All the filtered history
**/
export const getHistories = async ({ first = MAX_HISTORIES_IN_ONE_CALL, skip = 0, year = null }) => {
  const startingYear = year || MINIMUM_YEAR

  const { histories } = await graphCmsClient.request(
    `
    query {
      histories(first: ${first}, skip: ${skip}, where: {date_gte: "${startingYear}-01-01T00:00:00+00:00"}) {
        image {
          url
          alt
        }
        id
        date
        caption
      }
    }
  `
  )

  return {
    props: {
      histories
    }
  }
}
