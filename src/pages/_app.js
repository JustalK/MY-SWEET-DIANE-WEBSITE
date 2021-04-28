import styles from '@src/styles/globals.scss'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp ({ Component, pageProps, router }) {
  return <AnimatePresence>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
      pageInitial: {
        transform: 'translateY(120%)'
      },
      pageAnimate: {
        transform: 'translateY(0)'
      },
      pageExit: {
        transform: 'translateY(-120%)'
      }
    }}>
      <Component {...pageProps} />
    </motion.div>
  </AnimatePresence>
}

export default MyApp
