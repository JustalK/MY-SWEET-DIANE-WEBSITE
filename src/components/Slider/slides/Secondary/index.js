import styles from './styles.module.scss'

const CustomSlide = props => {
  return (
    <div className={styles.slide}>
      <span>{props.text}</span>
    </div>
  )
}

export default CustomSlide
