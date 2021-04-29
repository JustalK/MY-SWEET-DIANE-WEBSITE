/**
* The menu page
* @module pages/menu
*/
import Link from 'next/link'
import { ROUTE_HISTORIES } from '@src/constants/routes'
import { getPageBySlug } from '@src/services/page'

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
const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>
      <Link href={ROUTE_HISTORIES}>
        asdasdasd
      </Link>
    </div>
  )
}

export default Menu
