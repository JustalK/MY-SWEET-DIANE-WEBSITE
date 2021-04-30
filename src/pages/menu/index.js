/**
* The menu page
* @module pages/menu
*/
import Link from 'next/link'
import { ROUTE_HISTORIES } from '@src/constants/routes'
import { getPageBySlug } from '@src/services/page'
import styles from '@src/styles/Menu.module.scss'

/**
* @function getStaticProps
* Get all the moment at build time
* @return {Moment[]} All the moment in the database
**/
/* istanbul ignore next */
export async function getStaticProps () {
  return getPageBySlug('menu')
}

/**
* @function Menu
* render the menu page
* @return {Object} The html of the menu page
**/
const Menu = ({ page }) => {
  return (
    <div>
      <div className={styles.title}>
        <div>
          <span>Menu</span>
          <h1>Menu</h1>
          <span>Menu</span>
          <span>Menu</span>
          <span>Menu</span>
          <span>Menu</span>
        </div>
      </div>
      <div className={styles.menu} />
      <div className={styles.scroll}>
        <div className={styles.content}>
          <div className={styles.borderTop} />
          <nav className={styles.borderRight}>
            <div>
            </div>
          </nav>
          <Link href={ROUTE_HISTORIES}>
            <div className={styles.movable}>
              <span>{page.summary}</span>
              <span>{page.primaryText}</span>
              <span>{page.secondaryText}</span>
              <span>{page.secondaryText}</span>
              <span>{page.secondaryText}</span>
              <span>{page.secondaryText}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
