import { useState } from 'react'
import { Hearts } from '@agney/react-loading'
import styles from './styles.module.scss'
import Link from 'next/link'
import ReactPlayer from 'react-player'

const CustomSlide = props => {
  const [isLoaded, setIsLoaded] = useState(false)

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
