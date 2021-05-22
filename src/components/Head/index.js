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
* Most of the meta can be generated on this website : https://realfavicongenerator.net/
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
      {/* For the color of the bar on mobile */}
      <meta name='theme-color' content={COLOR_ORANGE} />
      <meta name="msapplication-TileColor" content={COLOR_ORANGE} />
      {/* Used by Android Chrome for the "Add to home screen" icon and settings. */}
      <link rel="manifest" href="/meta/site.webmanifest" />
      {/* For pinned tab on safari */}
      <link rel="mask-icon" href='/meta/icon_512x512.svg' color={COLOR_ORANGE} />
      {/* For the icon in the older version of browser */}
      <link rel='icon' href='/meta/icon.ico' />
      {/* For the icon in safari */}
      <link rel='icon' type='image/png' href='/meta/icon_16x16.png' sizes='16x16' />
      {/* For the icon in most of the browser */}
      <link rel='icon' type='image/png' href='/meta/icon_32x32.png' sizes='32x32' />
      {/* For the icon when added to the Home of the mobile on iOs in the different context : iPad, Iphone... */}
      <link rel='apple-touch-icon' sizes='120x120' href='/meta/icon_120x120.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='/meta/icon_152x152.png' />
      <link rel='apple-touch-icon' sizes='167x167' href='/meta/icon_167x167.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/meta/icon_180x180.png' />
      {/* The canonical */}
      <link rel='canonical' key='canonical' href={props.url} />
      {/* Meta data of facebook */}
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
