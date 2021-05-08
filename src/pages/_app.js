import '@src/styles/globals.scss'
import styles from '@src/styles/App.module.scss'
import Main from './index.js'
import Histories from './histories'
import Moments from './moments'
import Menu from './menu'
import { PageTransition } from 'next-page-transitions'

function MyApp ({ Component, pageProps, router }) {
  return <div className={styles.container}>
      <PageTransition timeout={1000} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
    </div>
}

export default MyApp
