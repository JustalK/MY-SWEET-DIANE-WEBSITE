/**
* The module for managing the request for the page
* @module services/page
*/
/**
 * The Page object
 * @typedef {Object} Page
 * @property {string} _id The id of the page
 * @property {string} slug The slug of the page
 * @property {string} title The title of the page
 * @property {string} summary The summary of the page
 * @property {string} primaryText The primary text of the page (only on sime page)
 * @property {string} secondaryText The second text of the page (only on some page)
 * @property {Asset[]} images The assets of the page
 */

import graphCmsClient from '@src/services/libs/graphCmsClient'

/**
* @function getPageBySlug
* Get a page in the database by the slug
* @param {string} slug The slug of the page searched
* @return {Page} Return the page with the correct slug
**/
export async function getPageBySlug (slug) {
  const { page } = await graphCmsClient.request(
    `
      query {
        page(where: {slug: "${slug}"}) {
          slug
          summary
          primaryText
          secondaryText
          title
          description
          images {
            url
            alt
            width
            height
            mimeType
          }
      }
    }
  `
  )

  return {
    props: {
      page
    }
  }
}
