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
          <CustomSlide legend="Legend of the image 1" src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip" alt="description 1" />
          <CustomSlide legend="Legend of the image 2" src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip" alt="description 2" />
        </CustomSlider>
        <span>{page.secondaryText}</span>
      </div>
    </CustomPage>
  )
}

export default Menu
