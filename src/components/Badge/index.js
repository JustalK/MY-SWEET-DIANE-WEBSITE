/**
* The module for the badge (History Page)
* @module components/badge
*/
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Hearts } from '@agney/react-loading'
import { getImage } from '@src/helper/image'
import styles from './styles.module.scss'

/**
* @function CustomBadge
* render the Badge component
* @param {Object} props The props of the component
* @return {Object} The dom of the Badge component
**/
const CustomBadge = props => {
  const [isLoaded, setIsLoaded] = useState(false)

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
      getImageByUrl(props.image.url)
    }
  }, [])

  return (
    <div className={`${styles.badge} ${props.className ? props.className : ''}`}>
      <div>
        { props.image &&
          <div className={`${styles.loading} ${isLoaded ? styles.loaded : ''}`}>
          <picture>
            <Image
              src={props.image.url}
              alt="Flower"
              width={150}
              height={150}
            />
          </picture>
          <Hearts width="120"/></div>
        }
        { props.caption && (<span className={styles.caption}>{props.caption}</span>)}
        <span className={styles.date}>{props.date}</span>
      </div>
    </div>
  )
}

export default CustomBadge
