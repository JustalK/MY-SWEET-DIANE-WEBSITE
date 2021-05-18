/**
* The module for waiting the loading of new badges
* This is the module that will be shown when the badge is loading
* @module components/badge/loading
*/
import { Hearts } from '@agney/react-loading'
import styles from '@src/components/Badge/styles.module.scss'

/**
* @function CustomBadgeLoading
* render the loading Badge component
* @param {Object} props The props of the component
* @return {Object} The dom of the loading Badge component
**/
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
