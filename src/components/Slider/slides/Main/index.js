import styles from './styles.module.scss'
import Link from 'next/link'
import ReactPlayer from 'react-player'

const CustomSlide = props => {
  return (
    <Link href={props.link}>
      <div className={styles.slide}>
        <div className={styles.player}>
          <ReactPlayer url={props.url} playing={true} loop={true} muted={true} />
        </div>
        <span>{props.legend}</span>
      </div>
    </Link>
  )
}

export default CustomSlide
