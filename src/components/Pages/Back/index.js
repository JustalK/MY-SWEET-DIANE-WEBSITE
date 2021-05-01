import styles from './styles.module.scss'
import { KeyboardBackspace } from '@material-ui/icons'

const CustomBack = props => {
  return (
    <div className={styles.menu}>
      <span><KeyboardBackspace /><span>Back</span></span>
    </div>
  )
}

export default CustomBack
