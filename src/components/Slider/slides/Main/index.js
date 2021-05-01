import styles from './styles.module.scss'

const CustomSlide = props => {
  return (
    <div className={styles.slide}>
      <picture>
        <source media="(min-width:650px)" srcSet="img_pink_flowers.jpg" />
        <source media="(min-width:465px)" srcSet="img_white_flower.jpg" />
        <img src={props.src} alt={props.alt} />
      </picture>
      <span>{props.legend}</span>
    </div>
  )
}

export default CustomSlide
