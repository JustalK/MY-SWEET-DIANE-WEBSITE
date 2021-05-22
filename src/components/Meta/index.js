/**
* The module for the meta of the app
* It defines what will be return to facebook share
* @module components/Meta
*/
import React from 'react'

/**
* @function CustomMeta
* render the Meta component
* @param {Object} props The props of the component
* @return {Object} The dom of the Meta component
**/
const CustomMeta = props => {
  return (
    <React.Fragment>
      <meta property="og:url" key='og:url' content={props.url} />
      <meta property="og:title" key='og:title' content={props.title} />
      <meta property="og:description" key='og:description' content={props.description} />
      <meta property="og:image" key='og:image' content={props.image.url} />
      <meta property="og:image:width" key='og:width' content={props.image.width} />
      <meta property="og:image:height" key='og:height' content={props.image.height} />
      <meta property="og:image:type" key='og:type' content={props.image.mimeType} />
    </React.Fragment>
  )
}

export default CustomMeta
