/**
* The menu page
* @module pages/menu
*/
import { getPageBySlug } from '@src/services/page'
import CustomSlider from '@src/components/Slider'
import CustomSlide from '@src/components/Slider/slides/Main'
import CustomPage from '@src/components/Pages'
import styles from './styles.module.scss'

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
    <CustomPage title={page.slug}>
      <div className={styles.movable}>
        <span>{page.summary}</span>
        <span>{page.primaryText}</span>
        <CustomSlider>
          <CustomSlide legend="My best moments" url="/static/1.mp4" />
          <CustomSlide legend="My history" url="/static/2.mp4" />
        </CustomSlider>
        <span>{page.secondaryText}</span>
      </div>
    </CustomPage>
  )
}

export default Menu
