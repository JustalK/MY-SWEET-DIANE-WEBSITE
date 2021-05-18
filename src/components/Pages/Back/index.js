/**
* The module for the back button
* @module components/pages/back
*/
import styles from './styles.module.scss'
import { KeyboardBackspace } from '@material-ui/icons'
import { useRouter } from 'next/router'

/**
* @function CustomBack
* render the Back component
* @param {Object} props The props of the component
* @return {Object} The dom of the Back component
**/
const CustomBack = props => {
  const router = useRouter()

  /**
  * Get the previous page visited from the router react
  **/
  const goPreviousPage = () => {
    router.back()
  }

  return (
    <div onClick={goPreviousPage} className={styles.menu}>
      <span><KeyboardBackspace /></span>
    </div>
  )
}

export default CustomBack
