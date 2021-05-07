import styles from './styles.module.scss'

const CustomCard = (props) => {
  return (
    <div className={styles.card}>
      <span className={styles.order}>{props.order}</span>
      <picture>
        <img src={props.image.url} alt="Flowers" />
      </picture>
      <span>{props.caption}</span>
    </div>
  )
}

export default CustomCard
