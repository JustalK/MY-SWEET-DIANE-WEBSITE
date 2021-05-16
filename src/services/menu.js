/**
* The module for managing the request for the menu
* @module services/menu
*/

/**
 * The Menu object
 * It manages the menu page
 * @typedef {Object} Menu
 * @property {string} _id The id of the moment
 * @property {string} legend The name of the link
 * @property {string} link The slug to the new page
 * @property {Asset} video The video of the menu
 */

import graphCmsClient from '@src/services/libs/graphCmsClient'

/**
* @function getMenus
* Get all the menus object from graphcms
* @return {Menu[]} All the menus in the database
**/
export const getMenus = async () => {
  const { menus } = await graphCmsClient.request(
    `
    query {
      menus {
        video {
          url
        }
        legend
        link
      }
    }
  `
  )

  return {
    props: {
      menus
    }
  }
}
