/**
* The module for managing the slide of the filter on history (mobile version)
* @module components/slides/secondary
*/
import styles from './styles.module.scss'

/**
* @function CustomSlide
* render the secondary Slide component
* @param {Object} props The props of the component
* @return {Object} The dom of the secondary Slide component
**/
const CustomSlide = props => {
  return (
    <div className={styles.slide}>
      <span>{props.text}</span>
    </div>
  )
}

export default CustomSlide
