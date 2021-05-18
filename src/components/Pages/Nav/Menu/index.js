/**
* The module for managing the links inside the nav
* @module components/menu
*/
import styles from './styles.module.scss'
import Link from 'next/link'

/**
* @function CustomMenu
* render the Menu component
* @param {Object} props The props of the component
* @return {Object} The dom of the Menu component
**/
const CustomMenu = props => {
  const selected = props.title && props.title.toUpperCase() === props.name.toUpperCase()
  return (
      <Link href={props.link}>
        <span className={[styles.barMenu, selected ? styles.selected : ''].join(' ')}>
          {props.children}
          <span>{props.name}</span>
        </span>
      </Link>
  )
}

export default CustomMenu
