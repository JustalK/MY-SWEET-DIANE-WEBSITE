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

function MyApp ({ Component, pageProps, router }) {
  return <div className={styles.container}>
      <PageTransition timeout={1000} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
    </div>
}

export default MyApp
