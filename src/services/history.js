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
import { MAX_HISTORIES_IN_ONE_CALL } from '@src/constants/histories'
import { MINIMUM_YEAR, MAXIMUM_YEAR } from '@src/constants/filters'

/**
* @function getHistories
* Get all the history from graphcms
* @return {History[]} All the history in the database
**/
export const getHistories = async ({ first = MAX_HISTORIES_IN_ONE_CALL, skip = 0, year = null }) => {
  const startingYear = year || MINIMUM_YEAR
  const endingYear = year || MAXIMUM_YEAR

  const { histories } = await graphCmsClient.request(
    `
    query {
      histories(first: ${first}, skip: ${skip}, where: {AND: {date_gte: "${startingYear}-01-01T00:00:00+00:00", date_lte: "${endingYear}-12-31T23:59:59+00:00"}}) {
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
