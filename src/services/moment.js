/**
* The module for managing the request for the moment
* @module services/moment
*/

/**
 * The Moment object
 * @typedef {Object} Moment
 * @property {string} _id The id of the moment
 * @property {string} caption The caption of the moment
 * @property {Asset} image The image of the moment
 */

import graphCmsClient from '@src/services/libs/graphCmsClient'

/**
* @function getMoments
* Get all the moments from graphcms
* @return {Moment[]} All the moment in the database
**/
export const getMoments = async () => {
  const { moments } = await graphCmsClient.request(
    `
    query {
      moments {
        image {
          url
          alt
        }
        caption
      }
    }
  `
  )

  return {
    props: {
      moments
    }
  }
}
