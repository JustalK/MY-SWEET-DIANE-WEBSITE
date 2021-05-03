import styles from './styles.module.scss'

const CustomBadge = props => {
  return (
    <div key={props.key} className={styles.badge}>
      <div>
        <picture>
          <source media="(min-width:650px)" srcSet="img_pink_flowers.jpg" />
          <source media="(min-width:465px)" srcSet="img_white_flower.jpg" />
          <img src={props.image.url} alt="Flowers" />
        </picture>
        <div>
          <span>{props.date}</span>
          <span>{props.caption}</span>
        </div>
      </div>
    </div>
  )
}

export default CustomBadge
