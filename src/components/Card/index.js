import { useRef, useEffect, useState } from 'react'
import { Hearts } from '@agney/react-loading'
import styles from './styles.module.scss'
import { getImage } from '@src/helper/image'

const CustomCard = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [width, setWidth] = useState(false)
  const frame = useRef(null)

  const getImageByUrl = async url => {
    await getImage(url)
    setIsLoaded(true)
  }

  useEffect(async () => {
    if (props.image) {
      setWidth(frame.current.getBoundingClientRect().width - 2)
      getImageByUrl(props.image.url)
    }
  }, [])

  return (
    <div className={styles.card}>
      <div ref={frame} className={`${styles.frame} ${isLoaded ? styles.loaded : ''}`} style={{ height: width + 'px' }}>
        <span className={styles.order}>{props.order}</span>
        <picture>
          <img src={props.image.url} alt="Flowers"/>
        </picture>
        <Hearts width="120"/>
      </div>
      <span>{props.caption}</span>
    </div>
  )
}

export default CustomCard
