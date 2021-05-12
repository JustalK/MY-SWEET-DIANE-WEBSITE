export const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

/**
* Return a random number between start (include) and end (include)
* @param {Int} start The lower limit (include)
* @param {Int} end The upper limit (include)
* @return {Int} The random number
**/
export const getRandomNumber = (start, end) => {
  return Math.floor(Math.random() * (end + 1)) + start
}
