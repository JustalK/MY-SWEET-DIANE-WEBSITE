/**
* The module for managing the transition between the page
* @module components/transition
*/
import styles from './styles.module.scss'

/**
* @function CustomTransition
* render the Transition component
* @param {Object} props The props of the component
* @return {Object} The dom of the Transition component
**/
const CustomTransition = props => {
  const numberOfElements = 12
  return (
    <div className={styles.transitionContainer}>
      <div>
        { Array.from({ length: numberOfElements }, (_, index) => (<div key={index} className={styles.transitionMovable} />)) }
      </div>
    </div>
  )
}

export default CustomTransition
