/**
* The module that will generate the entrance point of all the page
* @module pages/app
*/
import '@src/styles/globals.scss'
import styles from './styles.module.scss'
import { PageTransition } from 'next-page-transitions'
// I added those components because without the build is not working properly
// The module css are remove to early for doing page transitions
// For more information : https://github.com/vercel/next.js/issues/17464
import Main from './index.js'
import Histories from './histories'
import Moments from './moments'
import Menu from './menu'

/**
* @function MyApp
* Create the component MyApp
* This is the entrance point of the app
* @param {Object} Component The component of the page loaded
* @param {Object} pageProps The props needed for the component
* @param {Object} router The react router
* @return {Object} Return the dom of the capsule for the page
**/
function MyApp ({ Component, pageProps, router }) {
  return <div className={styles.container}>
      <PageTransition timeout={1000} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
    </div>
}

export default MyApp
