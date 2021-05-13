
import { forwardRef } from 'react'
import CustomNav from '@src/components/Pages/Nav'
import CustomTitle from '@src/components/Pages/Title'
import CustomBack from '@src/components/Pages/Back'
import CustomTransition from '@src/components/Transition'
import styles from './styles.module.scss'

const CustomPage = forwardRef((props, ref) => {
  return (
    <div>
      <CustomTransition />
      <div className={`${styles.page} ${styles.mobile}`}>
        <CustomTitle title={props.title} />
        <CustomBack />
        <div ref={ref} className={styles.scroll}>
          <div className={styles.content}>
            <div className={styles.borderTop} />
            <CustomNav title={props.title} />
            {props.children}
          </div>
        </div>
      </div>
      <div className={`${styles.page} ${styles.desktop}`}>
        <div className={styles.header}>
          <h1>{props.title}</h1>
          <span></span>
        </div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
})

CustomPage.displayName = 'CustomPage'
export default CustomPage
