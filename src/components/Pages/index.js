/**
* The module for the structure of the page
* @module components/page
*/
import { forwardRef, useRef, useImperativeHandle } from 'react'
import CustomNav from '@src/components/Pages/Nav'
import CustomTitle from '@src/components/Pages/Title'
import CustomBack from '@src/components/Pages/Back'
import CustomTransition from '@src/components/Transition'
import styles from './styles.module.scss'

/**
* @function CustomPage
* render the Page component
* @param {Object} props The props of the component
* @return {Object} The dom of the Page component
**/
const CustomPage = forwardRef((props, ref) => {
  const refScroll = useRef()
  const refContent = useRef()
  const refScrollDesktop = useRef()

  /**
  * Manage the multiple reference send to the children with forwardRef
  **/
  useImperativeHandle(ref, () => ({
    getScroll: () => {
      return refScroll.current
    },
    getContent: () => {
      return refContent.current
    },
    getScrollDesktop: () => {
      return refScrollDesktop.current
    }
  }))

  return (
    <div>
      <CustomTransition />
      <div className={`${styles.page} ${styles.mobile}`}>
        <CustomTitle title={props.title} />
        <CustomBack />
        <div ref={refScroll} className={styles.scroll}>
          <div ref={refContent} className={styles.content}>
            <div className={styles.borderTop} />
            <CustomNav title={props.title} />
            {props.children}
          </div>
        </div>
      </div>
      <div className={`${styles.page} ${styles.desktop}`}>
        <CustomBack />
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>
        <div>
          <div ref={refScrollDesktop} className={styles.scroll}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
})

CustomPage.displayName = 'CustomPage'
export default CustomPage
