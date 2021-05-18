/**
* The module for managing the title of the page
* @module components/title
*/
import styles from './styles.module.scss'

/**
* @function CustomTitle
* render the Title component
* @param {Object} props The props of the component
* @return {Object} The dom of the Title component
**/
const CustomTitle = (props) => {
  const numberOfElements = 5
  return (
    <div className={styles.title}>
      <div>
        { Array.from({ length: numberOfElements }, (v, i) => (<span key={i}>{props.title}</span>)) }
        <h1>{props.title}</h1>
        { Array.from({ length: numberOfElements }, (v, i) => (<span key={i}>{props.title}</span>)) }
      </div>
    </div>
  )
}

export default CustomTitle
