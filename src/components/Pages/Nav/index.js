import CustomMenu from './Menu'
import { Facebook, Home, EmojiEmotions, Favorite, Folder } from '@material-ui/icons'
import styles from './styles.module.scss'

const CustomNav = (props) => {
  const numberOfElements = 5
  return (
    <nav className={styles.nav}>
      <div>
        { Array.from({ length: numberOfElements }, (v, i) => (<span key={i}>{props.title}</span>)) }
        <CustomMenu name="Facebook" link="#">
          <Facebook />
        </CustomMenu>
        <CustomMenu name="Home" link="#">
          <Home />
        </CustomMenu>
        <CustomMenu name="Menu" link="#">
          <Folder />
        </CustomMenu>
        <CustomMenu name="Histories" link="#">
          <EmojiEmotions />
        </CustomMenu>
        <CustomMenu name="Moments" link="#">
          <Favorite />
        </CustomMenu>
        { Array.from({ length: numberOfElements }, (v, i) => (<span key={i}>{props.title}</span>)) }
      </div>
    </nav>
  )
}

export default CustomNav
