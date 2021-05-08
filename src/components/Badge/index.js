import { useEffect, useState } from 'react'
import { Hearts } from '@agney/react-loading'
import { getImage } from '@src/helper/image'
import styles from './styles.module.scss'

const CustomBadge = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  const getImageByUrl = async url => {
    await getImage(url)
    setIsLoaded(true)
  }

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
            <source media="(min-width:650px)" srcSet="img_pink_flowers.jpg" />
            <source media="(min-width:465px)" srcSet="img_white_flower.jpg" />
            <img src={props.image.url} alt="Flowers" />
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
