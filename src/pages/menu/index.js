/**
* The menu page
* @module pages/menu
*/
import Head from 'next/head'
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
      <Head>
        <title>My Sweetheart Diane</title>
        <meta name="description" content="My Sweetheart Diane" />
      </Head>
      <div className={`${styles.movable} ${styles.mobile}`}>
        <span>{page.summary}</span>
        <span>{page.primaryText}</span>
        <CustomSlider>
          {menus.map((menu, index) => (
            <CustomSlide key={index} legend={menu.legend} url={menu.video.url} link={menu.link} />
          ))}
        </CustomSlider>
        <span>{page.secondaryText}</span>
      </div>
      <div className={`${styles.movable} ${styles.desktop}`}>
        <div className={styles.column}>
          <span>{page.summary}</span>
          <CustomSlide legend={menus[0].legend} url={menus[0].video.url} link={menus[0].link} />
        </div>
        <div className={styles.column}>
          <CustomSlide legend={menus[1].legend} url={menus[1].video.url} link={menus[1].link} />
          <span>{page.primaryText}</span>
        </div>
        <div className={styles.column}>
          <span>{page.secondaryText}</span>
        </div>
      </div>
    </CustomPage>
  )
}

export default Menu
