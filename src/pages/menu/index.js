/**
* The menu page
* @module pages/menu
*/
import { getPageBySlug } from '@src/services/page'
import { getMenus } from '@src/services/menu'
import CustomSlider from '@src/components/Slider'
import CustomSlide from '@src/components/Slider/slides/Main'
import CustomPage from '@src/components/Pages'
import styles from './styles.module.scss'
import { MAX_REVALIDATE_IN_SECOND } from '@src/constants/properties'

/**
* @function getStaticProps
* Get all the moment at build time
* @return {Moment[]} All the moment in the database
**/
/* istanbul ignore next */
export async function getStaticProps () {
  const resultPage = getPageBySlug('menu')
  const resultMenus = getMenus()
  const result = await Promise.all([resultPage, resultMenus])
  return {
    props: {
      page: result[0].props.page,
      menus: result[1].props.menus
    },
    revalidate: MAX_REVALIDATE_IN_SECOND
  }
}

/**
* @function Menu
* render the menu page
* @return {Object} The html of the menu page
**/
const Menu = ({ page, menus }) => {
  return (
    <CustomPage title={page.slug}>
      <div className={styles.movable}>
        <span>{page.summary}</span>
        <span>{page.primaryText}</span>
        <CustomSlider>
          {menus.map((menu, index) => (
            <CustomSlide key={index} legend={menu.legend} url={menu.video.url} link={menu.link} />
          ))}
        </CustomSlider>
        <span>{page.secondaryText}</span>
      </div>
    </CustomPage>
  )
}

export default Menu
