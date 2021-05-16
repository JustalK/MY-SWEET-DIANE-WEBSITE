/**
* The module managing everything about random
* @module helper/random
*/

/**
* @function getRandomColor
* Return a random hexadecimal color
* @return {string} A random hexadecimal color
**/
export const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

/**
* @function getRandomNumber
* Return a random number between start (include) and end (include)
* @param {number} start The lower limit (include)
* @param {number} end The upper limit (include)
* @return {number} The random number
**/
export const getRandomNumber = (start, end) => {
  return Math.floor(Math.random() * (end + 1)) + start
}
