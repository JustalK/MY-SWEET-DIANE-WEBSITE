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
export const getHistories = async ({ skip = 0 }) => {
  const { histories } = await graphCmsClient.request(
    `
    query {
      histories(skip: ${skip}) {
        image {
          url
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

export const getHistoriesByYear = async ({ year }) => {
  const { histories } = await graphCmsClient.request(
    `
    query {
      histories(where: {AND: {date_gte: "${year}-01-01T00:00:00+00:00", date_lte: "${year}-12-31T23:59:59+00:00"}}) {
        image {
          url
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
