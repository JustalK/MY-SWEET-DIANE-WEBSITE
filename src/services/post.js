/**
* The module for managing the request for the post
* @module services/post
*/
`use strict`

/**
 * The Post object
 * @typedef {Object} Post
 * @property {string} _id The id of the post
 * @property {string} title The title of the post
 */

import graphCmsClient from '@src/services/libs/graphCmsClient'

/**
* @function getPosts
* Get all the posts from graphcms
* @return {Post[]} All the posts in the database
**/
export async function getPosts() {
  console.log(graphCmsClient)
  const { posts } = await graphCmsClient.request(
    `
    query {
      posts {
        id,
        title
      }
    }
  `
  );

  return {
    props: {
      posts
    },
  };
}
