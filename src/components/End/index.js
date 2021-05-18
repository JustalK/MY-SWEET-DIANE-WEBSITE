/**
* The module for the end of a page
* It defines what will be shown at the end of a page
* @module components/end
*/
import styles from './styles.module.scss'

/**
* @function CustomEnd
* render the End component
* @param {Object} props The props of the component
* @return {Object} The dom of the End component
**/
const CustomEnd = props => {
  return (
    <div className={styles.end}>
      <span>To be continued</span>
    </div>
  )
}

export default CustomEnd
