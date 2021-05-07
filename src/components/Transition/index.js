import styles from './styles.module.scss'

const CustomTransition = (props) => {
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
