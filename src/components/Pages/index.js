
import { useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { ROUTE_HISTORIES } from '@src/constants/routes'
import CustomNav from '@src/components/Pages/Nav'
import CustomTitle from '@src/components/Pages/Title'
import CustomBack from '@src/components/Pages/Back'
import styles from './styles.module.scss'

const CustomPage = props => {
  const scroll = useRef()
  const handleScroll = useCallback(() => {
    console.log('scroll')
  }, [])

  useEffect(() => {
    scroll.current.addEventListener('scroll', handleScroll)
    return () => {
      scroll.current.removeEventListener('scroll', handleScroll)
    }
  }, [scroll])

  return (
    <div>
      <CustomTitle title={props.title} />
      <CustomBack />
      <div ref={scroll} className={styles.scroll}>
        <div className={styles.content}>
          <div className={styles.borderTop} />
          <CustomNav title={props.title} />
          <Link href={ROUTE_HISTORIES}>
            {props.children}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CustomPage
