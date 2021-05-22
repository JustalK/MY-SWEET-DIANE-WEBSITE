/**
* The module managing everything about the router
* @module helper/router
*/

import { useRouter } from 'next/router'

/**
* @function getCanonicalUrl
* Return the canonical of the actual page
* @return {string} The canonical link of the actual page
**/
export const getCanonicalUrl = () => {
  // I return the current url since there is not any means for something else
  return getCurrentFullUrl()
}
/**
* @function getCurrentFullUrl
* Return the current url
* @return {string} The current url
**/
export const getCurrentFullUrl = () => {
  const site = process.env.NEXT_PUBLIC_WEBSITE_URL
  return site + useRouter().asPath
}
