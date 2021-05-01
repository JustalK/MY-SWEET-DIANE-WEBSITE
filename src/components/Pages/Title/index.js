import styles from './styles.module.scss'

const CustomTitle = (props) => {
  const numberOfElements = 5
  return (
    <div className={styles.title}>
      <div>
        { Array.from({ length: numberOfElements }, (v, i) => (<span key={i}>{props.title}</span>)) }
        <h1>Menu</h1>
        { Array.from({ length: numberOfElements }, (v, i) => (<span key={i}>{props.title}</span>)) }
      </div>
    </div>
  )
}

export default CustomTitle
