/**
* The module for the Head of the app
* It defines what will be return to facebook share
* @module components/Head
*/
import React from 'react'
import Head from 'next/head'
import { COLOR_ORANGE } from '@src/constants/colors'

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
      <meta name='author' key='author' content='Justal Kevin' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' key='description' content={props.description} />
      <meta name='theme-color' content={COLOR_ORANGE} />
      <link rel='icon' href='/meta/icon.ico' />
      <link rel='icon' type='image/png' href='/meta/icon_16x16.png' sizes='16x16' />
      <link rel='icon' type='image/png' href='/meta/icon_32x32.png' sizes='32x32' />
      <link rel='apple-touch-icon' href='/meta/icon_180x180.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/meta/icon_180x180.png' />
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
