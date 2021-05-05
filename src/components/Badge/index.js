import { Hearts } from '@agney/react-loading'
import styles from './styles.module.scss'

const CustomBadge = props => {
  return (
    <div className={`${styles.badge} ${props.className ? props.className : ''}`}>
      <div>
        { props.image &&
          (<picture>
            <source media="(min-width:650px)" srcSet="img_pink_flowers.jpg" />
            <source media="(min-width:465px)" srcSet="img_white_flower.jpg" />
            <img src={props.image.url} alt="Flowers" />
          </picture>)
        }
        { !props.image &&
          <div className={styles.loading}><Hearts width="120" /></div>
        }
        { props.caption && (<span className={styles.caption}>{props.caption}</span>)}
        <span className={styles.date}>{props.date}</span>
      </div>
    </div>
  )
}

export default CustomBadge
