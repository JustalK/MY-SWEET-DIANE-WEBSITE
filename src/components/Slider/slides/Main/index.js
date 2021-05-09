import styles from './styles.module.scss'
import ReactPlayer from 'react-player'

const CustomSlide = props => {
  return (
    <div className={styles.slide}>
      <div className={styles.player}>
        <ReactPlayer url={props.url} playing={true} loop={true} />
      </div>
      <span>{props.legend}</span>
    </div>
  )
}

export default CustomSlide
