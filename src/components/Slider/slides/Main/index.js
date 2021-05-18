/**
* The module for managing the slide of the menu (mobile version)
* @module components/slides/main
*/
import { useState } from 'react'
import { Hearts } from '@agney/react-loading'
import styles from './styles.module.scss'
import Link from 'next/link'
import ReactPlayer from 'react-player'

/**
* @function CustomSlide
* render the main Slide component
* @param {Object} props The props of the component
* @return {Object} The dom of the main Slide component
**/
const CustomSlide = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  /**
  * Set the isLoaded to true once the video inside the loaded has been loaded
  **/
  const handleStart = () => {
    setIsLoaded(true)
  }

  return (
    <Link href={props.link}>
      <div className={styles.slide}>
        <div className={`${styles.player} ${isLoaded ? styles.loaded : ''}`}>
          <ReactPlayer url={props.url} onPlay={handleStart} playing={true} loop={true} muted={true} />
          <Hearts width="120"/>
        </div>
        <span>{props.legend}</span>
      </div>
    </Link>
  )
}

export default CustomSlide
