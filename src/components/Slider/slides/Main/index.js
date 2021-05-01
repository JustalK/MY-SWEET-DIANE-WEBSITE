import styles from './styles.module.scss'

const CustomSlide = (props) => {
  return (
    <div className={styles.slide}>
      <picture>
        <source media="(min-width:650px)" srcSet="img_pink_flowers.jpg" />
        <source media="(min-width:465px)" srcSet="img_white_flower.jpg" />
        <img src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip" alt="Flowers" />
      </picture>
      <span>Legend of the image</span>
    </div>
  )
}

export default CustomSlide
