import styles from './styles.module.scss'
import Link from 'next/link'

const CustomMenu = (props) => {
  return (
      <Link href={props.link}>
        <span className={styles.barMenu}>
          {props.children}
          <span>{props.name}</span>
        </span>
      </Link>
  )
}

export default CustomMenu
