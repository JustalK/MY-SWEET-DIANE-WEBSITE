import styles from './styles.module.scss'
import Link from 'next/link'

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
