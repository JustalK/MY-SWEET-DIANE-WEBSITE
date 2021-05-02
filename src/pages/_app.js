import '@src/styles/globals.scss'
import styles from '@src/styles/App.module.scss'
import { PageTransition } from 'next-page-transitions'

function MyApp ({ Component, pageProps, router }) {
  return <div className={styles.container}>
      <PageTransition timeout={850} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
    </div>
}

export default MyApp
