
import { forwardRef } from 'react'
import Link from 'next/link'
import { ROUTE_HISTORIES } from '@src/constants/routes'
import CustomNav from '@src/components/Pages/Nav'
import CustomTitle from '@src/components/Pages/Title'
import CustomBack from '@src/components/Pages/Back'
import styles from './styles.module.scss'

const CustomPage = forwardRef((props, ref) => {
  return (
    <div>
      <div className={styles.transitionContainer}>
        <div>
          { Array.from({ length: 12 }, (_, index) => (<div key={index} className={styles.transitionMovable} />)) }
        </div>
      </div>
      <div className={styles.page}>
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
    </div>
  )
})

CustomPage.displayName = 'CustomPage'
export default CustomPage
