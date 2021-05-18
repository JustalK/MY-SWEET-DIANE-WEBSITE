/**
* The module for the card (Moment Page)
* @module components/card
*/
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { Hearts } from '@agney/react-loading'
import styles from './styles.module.scss'
import { getImage } from '@src/helper/image'

/**
* @function CustomCard
* render the Card component
* @param {Object} props The props of the component
* @return {Object} The dom of the Card component
**/
const CustomCard = props => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [width, setWidth] = useState(false)
  const frame = useRef(null)

  /**
  * Get the image by url
  * Once the image is loaded, set the state of isLoaded to true
  **/
  const getImageByUrl = async url => {
    await getImage(url)
    setIsLoaded(true)
  }

  /**
  * Function that will be called when the componnt is mounted
  **/
  useEffect(async () => {
    if (props.image) {
      setWidth(frame.current.getBoundingClientRect().width)
      getImageByUrl(props.image.url)
    }
  }, [])

  return (
    <div className={styles.card}>
      <div ref={frame} className={`${styles.frame} ${isLoaded ? styles.loaded : ''}`} style={{ height: width + 'px' }}>
        <span className={styles.order}>{props.order}</span>
        <picture>
          <Image
            src={props.image.url}
            loading={props.defer ? 'lazy' : 'eager'}
            alt="Flower"
            layout='fill'
          />
        </picture>
        <Hearts width="120"/>
      </div>
      <span>{props.caption}</span>
    </div>
  )
}

export default CustomCard
