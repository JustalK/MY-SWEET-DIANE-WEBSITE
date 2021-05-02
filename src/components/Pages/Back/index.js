import styles from './styles.module.scss'
import { KeyboardBackspace } from '@material-ui/icons'
import { useRouter } from 'next/router'

const CustomBack = props => {
  const router = useRouter()
  const goPreviousPage = () => {
    router.back()
  }

  return (
    <div onClick={goPreviousPage} className={styles.menu}>
      <span><KeyboardBackspace /><span>Back</span></span>
    </div>
  )
}

export default CustomBack
