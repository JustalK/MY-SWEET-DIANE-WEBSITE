import Link from 'next/link'
import { ROUTE_HISTORIES } from '@src/constants/routes'
import CustomNav from '@src/components/Pages/Nav'
import CustomTitle from '@src/components/Pages/Title'
import styles from './styles.module.scss'

const CustomPage = props => {
  return (
    <div>
      <CustomTitle title={props.title} />
      <div className={styles.menu} />
      <div className={styles.scroll}>
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
