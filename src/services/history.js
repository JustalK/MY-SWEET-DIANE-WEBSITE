/**
* The module for managing the request for the history
* @module services/history
*/
/**
 * The History object
 * @typedef {Object} History
 * @property {string} _id The id of the history
 * @property {string} caption The caption of the history
 * @property {Object} image The image of the history
 */

import graphCmsClient from '@src/services/libs/graphCmsClient'

/**
* @function getHistories
* Get all the history from graphcms
* @return {History[]} All the history in the database
**/
export async function getHistories () {
  const { histories } = await graphCmsClient.request(
    `
    query {
      histories {
        image {
          url
        }
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
