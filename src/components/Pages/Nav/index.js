import CustomMenu from './Menu'
import { Facebook, Home, EmojiEmotions, Favorite, Folder } from '@material-ui/icons'
import styles from './styles.module.scss'
import { ROUTE_MENU, ROUTE_HOME, ROUTE_HISTORIES, ROUTE_MOMENTS } from '@src/constants/routes'

const CustomNav = (props) => {
  const numberOfElements = 5
  return (
    <nav className={styles.nav}>
      <div>
        { Array.from({ length: numberOfElements }, (v, i) => (<span key={i}>{props.title}</span>)) }
        <span className={styles.menu}>
          <CustomMenu name="Facebook" link="#">
            <Facebook />
          </CustomMenu>
          <CustomMenu title={props.title} name="Home" link={ROUTE_HOME}>
            <Home />
          </CustomMenu>
          <CustomMenu title={props.title} name="Menu" link={ROUTE_MENU}>
            <Folder />
          </CustomMenu>
          <CustomMenu title={props.title} name="Histories" link={ROUTE_HISTORIES}>
            <EmojiEmotions />
          </CustomMenu>
          <CustomMenu title={props.title} name="Moments" link={ROUTE_MOMENTS}>
            <Favorite />
          </CustomMenu>
        </span>
        { Array.from({ length: numberOfElements }, (v, i) => (<span key={i}>{props.title}</span>)) }
      </div>
    </nav>
  )
}

export default CustomNav
