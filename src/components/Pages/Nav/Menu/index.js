import styles from './styles.module.scss'

const CustomMenu = (props) => {
  return (
      <a href={props.link} className={styles.barMenu}>
        {props.children}
        <span>{props.name}</span>
      </a>
  )
}

export default CustomMenu
