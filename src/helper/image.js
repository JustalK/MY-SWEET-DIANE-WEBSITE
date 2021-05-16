/**
* The module managing everything about the image
* @module helper/image
*/

/**
* @function getImage
* Return a promise which resolve once the url of the image has been loaded entirely
* @param {string} url The url of the image to load
* @return {string} The url of the image loaded encapsulated in a promise
**/
export const getImage = url => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve(url)
    }
    img.onerror = () => {
      reject(url)
    }
    img.src = url
  })
}
