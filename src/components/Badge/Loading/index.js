import { Hearts } from '@agney/react-loading'
import styles from '@src/components/Badge/styles.module.scss'

const CustomBadgeLoading = props => {
  return (
    <div className={`${styles.badge} ${props.className ? props.className : ''}`}>
      <div>
          <div className={styles.loading}>
            <Hearts width="120" className={styles.test} />
          </div>
        { props.caption && (<span className={styles.caption}>{props.caption}</span>)}
        <span className={styles.date}>Loading</span>
      </div>
    </div>
  )
}

export default CustomBadgeLoading
