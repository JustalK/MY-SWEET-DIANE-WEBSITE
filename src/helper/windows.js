/**
* The module managing everything about the window
* @module helper/windows
*/

import { DESKTOP_MINIMUM_WIDTH } from '@src/constants/windows'

/**
* @function getScreenWidth
* Return the width of the window of the user
* @return {number} The width of the window of the user
**/
export const getScreenWidth = () => {
  return window.innerWidth
}

/**
* @function getScreenHeight
* Return the height of the window of the user
* @return {number} The height of the window of the user
**/
export const getScreenHeight = () => {
  return window.innerHeight
}

/**
* @function isDesktop
* Return true if the version of the user is the desktop one
* @return {boolean} true if the version of the user is the desktop one
**/
export const isDesktop = () => {
  return window.innerWidth >= DESKTOP_MINIMUM_WIDTH
}
