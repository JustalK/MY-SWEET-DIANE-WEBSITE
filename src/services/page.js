/**
* The module for managing the request for the page
* @module services/page
*/
`use strict`

/**
 * The Page object
 * @typedef {Object} Page
 * @property {string} _id The id of the page
 * @property {string} summary The summary of the page
 */

import graphCmsClient from '@src/services/libs/graphCmsClient'

/**
* @function getPageBySlug
* Get the page in the database by the slug
* @return {Page} Return the page in the database
**/
export async function getPageBySlug(slug) {
  const { page } = await graphCmsClient.request(
		`
		query {
			page(where: {slug: "${slug}"}) {
		    summary
        title
		  }
    }
  `
  );

  return {
    props: {
      page
    },
  };
}
