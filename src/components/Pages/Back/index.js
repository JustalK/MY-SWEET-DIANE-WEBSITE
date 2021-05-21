/**
* The module for the back button
* @module components/pages/back
*/
import styles from './styles.module.scss'
import { KeyboardBackspace } from '@material-ui/icons'
import { ROUTE_HOME, ROUTE_MENU, ROUTE_HISTORIES, ROUTE_MOMENTS } from '@src/constants/routes'
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
    if (router.asPath === ROUTE_HISTORIES || router.asPath === ROUTE_MOMENTS) {
      router.push(ROUTE_MENU)
    } else {
      router.push(ROUTE_HOME)
    }
  }

  return (
    <div onClick={goPreviousPage} className={styles.menu}>
      <span><KeyboardBackspace /></span>
    </div>
  )
}

export default CustomBack
