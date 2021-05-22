/**
* The module for the Head of the app
* It defines what will be return to facebook share
* @module components/Head
*/
import React from 'react'
import Head from 'next/head'

/**
* @function CustomHead
* render the Head component
* @param {Object} props The props of the component
* @return {Object} The dom of the Head component
**/
const CustomHead = props => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='description' key='description' content={props.description} />
      <link rel='canonical' key='canonical' href={props.url} />
      <meta property='og:url' key='og:url' content={props.url} />
      <meta property='og:title' key='og:title' content={props.title} />
      <meta property='og:description' key='og:description' content={props.description} />
      <meta property='og:image' key='og:image' content={props.image.url} />
      <meta property='og:type' content='website' />
      <meta property='og:image:width' key='og:width' content={props.image.width} />
      <meta property='og:image:height' key='og:height' content={props.image.height} />
      <meta property='og:image:type' key='og:type' content={props.image.mimeType} />
    </Head>
  )
}

export default CustomHead
